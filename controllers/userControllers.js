const User = require("../models/userModel");

const userContactForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }
    if (!/^[a-zA-Z ]+$/.test(name)) {
      return res
        .status(400)
        .json({ error: "Name should contain only alphabets" });
    }
    if (!/^\d{10}$/.test(phone)) {
      return res
        .status(400)
        .json({ error: "Phone number should contain only 10 digits" });
    }
    if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
      return res.status(400).json({ error: "Invalid email" });
    }
    const userExist = await User.findOne({ $or: [{ email }, { phone }] });
    if (userExist) {
      return res
        .status(400)
        .json({ message: "User with this email or phone already exists" });
    }


    const user = new User({ name, email, phone, message });

    await user.save();
    return res
      .status(201)
      .json({ message: "User contact form submitted successfully", user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = { userContactForm };
