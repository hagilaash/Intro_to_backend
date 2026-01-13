import { User } from '../models/user.model.js';

const registerUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        // BASIC VALIDATION
        if (!username || !password || !email) {
            if (!username || !password || !email) {
                    return res.status(400).json({
                        message: "ALL FIELDS ARE REQUIRED",
                        data: req.body
                    });
            }
        }

        // CHECK IF USER ALREADY EXISTS
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
            return res.status(409).json({
                message: 'USER ALREADY EXISTS',
                data: req.body});
        }

        // CREATE NEW USER
        const user = await User.create({ 
            username, 
            password, 
            email: email.toLowerCase(),
            loggedIn: false 
        });

        res.status(201).json({ message: 'User registered successfully', 
            user:{ id:user.id, username:user.username, email:user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

const loginUser = async (req, res) => {
    try {
        // checking if the user already exists
        const { username, password } = req.body;

        const user = await User.findOne({ 
            email: email.toLowerCase() });

        if (!user) {
            return res.status(404).json({ message: 'USER NOT FOUND' });
        }

        // Login logic to be implemented
    } catch (error) {
        res.status(500).json({ message: 'SERVER ERROR', error: error.message });
    }
}

export { registerUser };
