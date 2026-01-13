const User = require("../models/userModel");
let bcrypt = require('bcrypt')

let CreateUser = async (req, res) => {
    // console.log(req.body);

    let { username, email, password } = req.body
    try {
        let isUserEmail = await User.findOne({ email })
        if (isUserEmail) {
            return res.status(409).json({ message: "Email already exists" });
        }

        let hash = await bcrypt.hash(password, 10)

        let newUser = await new User({
            username,
            email,
            password: hash
        })
        newUser.save()
        res.status(201).json({
            message: "User registered successfully"
        });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }

}

let getUserById = async (req, res) => {
    let userId = req.params.id
    try {

        let userData = await User.findOne({ _id: userId })
        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }
        res.send(userData)

    } catch (error) {
        res.status(500).json({
            message: "Server error or no result found"
        });
    }
}


let updateUser = async (req, res) => {
    console.log(req.params.id);

    let userId = req.params.id
    try {
        if (!userId) {
            return res.status(404).json({ message: "User not found" });
        }
        let updateData = await User.findOne({ _id: userId })

        console.log(updateData);
        
        if (!updateData) {
            return res.status(404).json({ message: "The User Doesn't exist" });
        }
        let { email, username } = req.body

        if (email) updateData.email = email

        if (username) updateData.username = username
        await userData.save();
        res.json({ message: "Data Updated successfully" });
    } catch (error) {
        res.status(400).json({ error: "Invalid ID" });
    }
}

let deleteUser = async (req, res) => {

    try {
        let deleteData = await Users.findByIdAndDelete({ _id: deleteId });
        if (!deleteData) {
            return res.status(404).json({ message: "User Not found" });
        }
        res.json({ message: "User deleted successfully" })

    } catch (error) {
        res.status(400).json({ error: "Invalid ID" });
    }
}


module.exports = { CreateUser, getUserById, updateUser, deleteUser }