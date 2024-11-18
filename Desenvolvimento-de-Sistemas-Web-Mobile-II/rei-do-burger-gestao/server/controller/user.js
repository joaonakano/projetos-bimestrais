const { verifyIdToken } = require("../model/Firebase")

module.exports = {
    login: async (req, res) => {
        const { idToken } = req.body

        if (!idToken) {
            return res.status(400).json({message: "ID Token missing"})
        }

        try {
            const decodedToken = await verifyIdToken(idToken)
            req.session.user = decodedToken
            res.cookie('token', idToken, {
                httpOnly: true,
                secure: false,
                maxAge: 10000,
                path: '/'
            })
            res.status(200).json({message: 'Login successful', user: decodedToken})
        } catch (err) {
            console.error("Error verifying token:", err);
            res.clearCookie('token');
            return res.status(401).json({ message: "Invalid or expired token." });
        }
    }
}