const User = require("#models/userModel");

exports.registerUser = async (userData) => {
  const { email, password, name } = userData;

  // 1. Verify if the user already exists
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) throw new Error("USER_ALREADY_EXISTS");

  // 2. Encrypt password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // 3. Create user in the DB
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return newUser;
};

exports.authenticateUser = async (email, password) => {
  // 1. Find user by email
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error("INVALID_CREDENTIALS");

  // 2. Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("INVALID_CREDENTIALS");

  // 3. Generate JWT
  const payload = { id: user.id, email: user.email };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "15m" });

  res.json({ token });
};

exports.getUsers = (query) => {
  // Add pagination
  const { page = 1, limit = 10 } = query;
  const offset = (page - 1) * limit;
  // Filter by gender
  const filter = {};
  const { gender } = query;
  if (gender) filter.gender = gender;
 
  return User.findAll({
    where: filter,
    limit,
    offset,
    order: [["name", "ASC"]],
  });
};
