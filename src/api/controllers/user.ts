import mongoose from "mongoose";
import users from "../models/users";

const signup = (req, res, next) => {
    const user = new users({
        _id: new mongoose.Types.ObjectId,
        email: req.body.email,
        password: req.body.password
    });
    user
    .save()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: 'User created'
        })
    })
    .catch(error => {
        res.status(500).json({
            error
        })
    })
};

export {signup};