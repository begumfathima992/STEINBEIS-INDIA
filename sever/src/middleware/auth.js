function authenticate(req, res, next) {
    const { username, password } = req.body;

    // Check if the provided credentials match the developer credentials
    if (username === 'dev' && password === 'dev@1234') {
        return next(); // Continue to the next middleware or route handler
    } else {
        return res.status(401).json({ message: 'Authentication failed.' });
    }
}

module.exports = authenticate;
