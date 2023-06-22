const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config()

const secret = process.env.TOKEN_SECRET


const withAuth = function(req, res, next) {
    console.log(req.cookies);
    const token = req.cookies.token;
    if (!token) {
        res.status(401).send('Unauthorized: No token provided');
    } else {
        jwt.verify(token, secret, {}, function(err, decoded) {
            if (err) {
                res.status(401).send('Unauthorized: Invalid token');
            } else {
                req.email = decoded.email;
                next();
            }
        });
    }
}

module.exports = withAuth;