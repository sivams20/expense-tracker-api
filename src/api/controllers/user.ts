import mongoose from "mongoose";
import User from "../models/users";

const signup = (req, res, next) => {
    
    User.find({email: req.body.email})
    .exec()
    .then(user => {
        if(user.length){
            return res.status(409).json({message: "Mail already exist!"});
        }else{
            const user = new User({
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
        }
    });

};

export {signup};