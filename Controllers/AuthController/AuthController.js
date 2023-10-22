const auth = require('../../Models/AuthModel/AuthModel')

const signin = (req, res) => {
    res.send("Welcome to Live API Signin");
}

const signup = async (request, response) => {
    // res.send("Welcome to Live API SignUp");
    try {
        const authresponse = await auth.create({
            email: request.body.email,
            password: request.body.password,
            username: request.body.username,
            phone: request.body.phone
        })

        if (authresponse) {
            response.status(200).json({
                message: 'User Login Success',
                data: ({
                    "message": "Success",
                    "data": authresponse
                })
            });
        } else {
            response.status(200).json({
                message: 'User Login Failed',
                data: ({
                    "message": "Success",
                    "data": authresponse
                })
            });
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    signin,
    signup
}