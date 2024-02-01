const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env; // Use environment variable for JWT secret

// Middleware for validating JWT
exports.validateToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized - Token not provided' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized - Invalid token' });
        }
        req.user = decoded;
        next();
    });
};

// Middleware for validating song data
exports.validateSongData = (req, res, next) => {
    const { judul, artist, durasi } = req.body;

    if (!judul || !artist || !durasi) {
        return res.status(400).json({ error: 'Bad Request - Missing required fields' });
    }

    // Additional validation logic can be added based on specific requirements

    next();
};

// Middleware for validating user data
exports.validateUserData = (req, res, next) => {
    const { username, email_address } = req.body;

    if (!username || !email_address) {
        return res.status(400).json({ error: 'Bad Request - Missing required fields' });
    }

    // Additional validation logic can be added based on specific requirements

    next();
};
