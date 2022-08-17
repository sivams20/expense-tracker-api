import mongoose from "mongoose";
import Category from "../models/categories";

const add_category = (req, res, next) => {
    const category = new Category({
        _id: new mongoose.Types.ObjectId(),
        userId: req.userData.userId,
        name: req.body.name
    });
    category.save()
        .then(result => {
            res.status(200).json({
                message: 'Category added successfully.',
                category: category
            })
        }).catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

const fetch_categories = (req, res, next) => {
    Category.find()
        .select('name')
        .exec()
        .then(result => {
            const response = {
                categories: result
            }
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        })
}

export {add_category, fetch_categories};
