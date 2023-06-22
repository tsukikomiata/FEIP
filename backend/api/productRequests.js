const express = require("express");
const productModel = require("../models/ProductModel.js");

const router = express.Router();

router.get('/', (req, res) => {
    productModel.find({}, (err, product) => {
        if (err) {
            res.status(500).send('Products not found, try again')
        } else if (product.length === 0) {
            res.status(404).send('Products not found')
        } else {
            res.send(product)
        }
    })
})

router.get('/:name', (req, res) => {
    productModel.findOne({name: req.params.name}, (err, product) => {
        if (err) {
            res.status(500).send('Product not found, try again')
        } else if (!product) {
            res.status(404).send('Product not found')
        } else {
            res.send(product)
        }
    })
})

router.delete("/:name", (req, res) => {
    productModel.findOne({name: req.params.name}, (err, product) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error with db, please, try again")
        } else {
            product.delete((err) => {
                if (err) {
                    console.log(err);
                    res.status(500).send("Error while deleting, please, try again")
                } else {
                    res.status(200).send(product)
                }
            })
        }
    })
})

router.post('/',(req, res) => {
    const {name, description, category, price, positiveRating, negativeRating} = req.body;

    let product = new productModel({name, description, category, price, positiveRating, negativeRating});
    product.save((err) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error while adding, please, try again")
        } else {
            res.status(200).send("New product successfully added!")
        }
    });
});


module.exports = router;
