import User from '../models/user.js';
import jwt from 'jsonwebtoken';
const createUser = async (req, res) => {
    const { fullname,
        email,
        phone,
        password } = req.body;
    try {
        const newUser = new User({
            fullname,
            email,
            phone,
            password
        })
        await newUser.save();
        return res.status(201).json({message:'create new user successful',newUser });

    }catch(error){
        console.log(error);
    }

}




const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(409).json({ message: 'Email and password are required' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign(
            { id: user._id, role: user.role },  
            process.env.JWT_SECRET, 
            { expiresIn: '2h' }  
          );

        res.status(200).json({
            message: 'Login successful',
            token,
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


export {createUser,loginUser};
