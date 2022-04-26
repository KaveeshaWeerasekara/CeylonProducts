const Payment = require('../models/Payments');

exports.createPayment = async function (req, res, next) {
    try{
        const createdPayment = new Payment({
            paymentID : req.body.paymentID,
            amount : req.body.amount,
            paymentType: req.body.paymentType,
            date: req.body.date,
            
        }); 

        const result = await createdPayment.save();

        res.json(result);

    }catch(error){
        console.error(error.message);
        res.send("Server error 5");
    }
};

const getPayments = async(req, res, next) => {
    const Payments = await Payment.find().exec();
    res.json(Payments);
}

exports.getPayments = getPayments;
