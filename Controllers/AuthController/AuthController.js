const Auth = require('../../Models/AuthModel/AuthModel'); // Make sure to import your Mongoose model correctly

const signin = (req, res) => {
    res.send("Welcome to Live API Signin");
}

const signup = async (req, res) => {
    // res.send("Welcome to Live API SignUp");
    try {
        const authData = {
            email: req.body.email,
            password: req.body.password,
            username: req.body.username,
            phone: req.body.phone
        };

        const authResponse = await Auth.create(authData);

        if (authResponse) {
            res.status(201).json({
                message: 'User Registration Success',
                data: {
                    message: "Success",
                    user: authResponse
                }
            });
        } else {
            res.status(400).json({
                message: 'User Registration Failed',
                data: {
                    message: "Failed",
                    user: null
                }
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        });
    }
}

module.exports = {
    signin,
    signup
};
