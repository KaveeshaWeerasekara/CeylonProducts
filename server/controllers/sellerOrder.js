const Order = require('../models/sellerOrder');


exports.createOrder = async function (req, res, next) {
    try {
        const createOrders = new Order({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            mobileNo: req.body.mobileNo,
            StreetNo: req.body.StreetNo,
            City: req.body.City,
            postalCode: req.body.postalCode,
            Country: req.body.Country,
            quantity: req.body.quantity,
        });

        const result = await createOrders.save();

        res.json(result);

    } catch (error) {
        console.error(error.message);
        res.send("Server error 2");
    }
};


const getOrders = async (req, res, next) => {
    const orders = await Order.find().exec();
    res.json(orders);
}



exports.getOrders = getOrders;