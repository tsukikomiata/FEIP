const express = require("express");
const orderModel = require("../models/OrderModel.js");

const router = express.Router();

router.get('/', (req, res) => {
    orderModel.find({}, (err, order) => {
        if (err) {
            res.status(500).send('Orders not found, try again')
        } else if (order.length === 0) {
            res.status(404).send('Orders not found')
        } else {
            res.send(order)
        }
    })
})

router.get('/:id', (req, res) => {
    orderModel.findOne({id: req.params.id}, (err, order) => {
        if (err) {
            res.status(500).send('Order not found, try again')
        } else if (!order) {
            res.status(404).send('Order not found')
        } else {
            res.send(order)
        }
    })
})

router.delete("/", (req, res) => {
    orderModel.findOne({id: req.body.id}, (err, order) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error with db, please, try again")
        } else {
            order.delete((err) => {
                if (err) {
                    console.log(err);
                    res.status(500).send("Error while deleting, please, try again")
                } else {
                    res.status(200).send(order)
                }
            })
        }
    })
})

router.get("/user/:name", (req, res) => {
    orderModel.find({user: req.params.name}, (err, order) => {
        if (err) {
            res.status(500).send('Orders not found, try again')
        } else if (order.length === 0) {
            res.status(404).send('Orders not found')
        } else {
            res.send(order)
        }
    })
})

router.post('/',async (req, res) => {
    const {price, place, products, user, status, note} = req.body;
    let id = req.body.id
    let date = req.body.date
    let flag = true
    if (!id) {
        id = 0
        flag = false
    }

    if (!date) {
        date = Date()
    }

    orderModel.find({}, (err, orders) => {
        if (err) {
            res.status(500).send('Problems with db')
        } else {
            if (orders.length !== 0 && !flag) {
                id = orders.length + 1
                console.log(orders)
                console.log(id)
            }
            console.log(id)
            let order = new orderModel({id: id, date: date, price: price, place: place,
                products: products, user: user, status: status, note: note});
            console.log(order)
            order.save((err) => {
                if (err) {
                    console.log(err);
                    res.status(500).send("Error while adding, please, try again")
                } else {
                    res.status(200).send("New order successfully added!")
                }
            });
        }
    })
});


module.exports = router;
