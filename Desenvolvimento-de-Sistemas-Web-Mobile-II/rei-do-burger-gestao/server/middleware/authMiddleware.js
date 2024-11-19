const { verifyIdToken } = require("../model/Firebase");

const authenticate = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Authentication required." });
    }

    try {
        const decodedToken = await verifyIdToken(token);
        req.user = decodedToken; 
        next(); 
    } catch (error) {
        console.error("Error verifying token:", error);
        return res.status(401).json({ message: "Invalid or expired token." });
    }
};

module.exports = authenticate;