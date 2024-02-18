const jwt = require('jsonwebtoken');

const genrateToken = (id)=>{
    return jwt.sign({id}, process.env.JWT, {
        expiresIn: '30d'
    });
}

module.exports = genrateToken