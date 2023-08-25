const User = require("../models/User");

module.exports = {
    createUser: async (req, res) => {
        try {
            const { name, age, gender, dob } = req.body;
            if (!name || !age || !gender || !dob) {
                return res.status(400).json({ message: 'All fields are required.' });
              }
            const user = new User({ name, age, gender, dob });
            await user.save();
            res.status(201).json({ message: 'User created successfully', data: user });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}