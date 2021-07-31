const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw next(new Error("Non autorisé", 401));
        } else {
            next();
        }
    } catch {
        return next(new Error("Requête non authentifiée", 401));
    }
};
