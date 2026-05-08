const userService = require("#service/userService.js");

exports.register = async (req, res) => {
  try {
    const newUser = await userService.registerUser(req.body);

    return res.status(201).json({
      message: "User registered successfully.",
      user: { id: newUser.id, email: newUser.email },
    });
  } catch (err) {
    console.error(err);
    if (err.message === "USER_ALREADY_EXISTS") {
      return res.status(400).json({ message: "Email is already in use." });
    }
    return res.status(500).json({ message: "Error creating user." });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validate input
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    // 2. Authenticate user
    const token = await userService.authenticateUser(email, password);
    return res.json({ token });
  } catch (err) {
    if (err.message === "INVALID_CREDENTIALS") {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    console.error(err);
    return res.status(500).json({ message: "Server error." });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getUsers(req.query);
    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "Error fetching users." });
  }
};
