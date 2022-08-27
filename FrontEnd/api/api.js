const axios = require("axios");
require("dotenv").config();

const postRegistration = async (req) => {
    return await axios.post(process.env.backend_url,{firstName: req.body.firstName, lastName: req.body.lastName, address: req.body.address, city: req.body.city, state: req.body.state, zip: req.body.zip, email: req.body.email, password: req.body.password});
};

module.exports = postRegistration;