import mongoose from "mongoose";
import User from "../models/users";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signup = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length) {
        return res.status(409).json({ message: "Mail already exist!" });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({ error: err });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash,
            });
            user
              .save()
              .then((result) => {
                res.status(200).json({
                  message: "User Created",
                });
              })
              .catch((err) => {
                res.status(500).json({
                  error: err,
                });
              });
          }
        });
      }
    });
};

const signIn = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Authentication failed",
        });
      }
      const hashData = user[0];
      const password = hashData.password;
      bcrypt.compare(req.body.password, password, (error, result) => {
        if (error) {
          return res.status(401).json({
            message: "Auth Failed",
          });
        }
        if (result) {
          const token = jwt.sign(
            { email: user[0].email, userId: user[0]._id },
            "JWT_Secret_Key",
            { expiresIn: "1h" }
          );
          return res.status(200).json({
            message: "Authentication Successful",
            token: token,
          });
        }
        res.status(401).json({ message: "Authentication failed" });
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

export { signup, signIn };
