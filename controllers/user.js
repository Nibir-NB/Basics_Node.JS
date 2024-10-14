
const User = require('../json.js'); 

const signUp =  async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

       
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        
        const token = jwt.sign({ id: newUser._id }, 'secretKey', { expiresIn: '1h' });

       
        res.status(201).json({
            message: "User registered successfully",
            token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};


const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

      
        const token = jwt.sign({ id: user._id }, 'secretKey', { expiresIn: '1h' });
        
      
        res.status(200).json({ 
            message: "Sign-in successful", 
            token 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}



const addUser = (req, res) => {
    const userId = req.params.id;
    const updatedUser = { id: userId, ...req.body };

    const existingUserIndex = users.findIndex(user => user.id === userId);

    if (existingUserIndex !== -1) {
        return res.send('The user is already exist')
    } else {
        users.push(updatedUser);
        return res.status(201).json({ message: 'User added successfully!', user: updatedUser });
    }
}


module.exports = { signIn, signUp, addUser };

