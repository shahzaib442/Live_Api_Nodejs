

const signin = (req, res) => {
    res.send("Welcome to Live API Signin");
}

const signup = (req, res) => {
    res.send("Welcome to Live API SignUp");
}

module.exports = {
    signin,
    signup
}