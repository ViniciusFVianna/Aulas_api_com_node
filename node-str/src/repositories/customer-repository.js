'use strict'
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.create = async (data) => {
    var customer = Customer(data);
    await customer.save();
}