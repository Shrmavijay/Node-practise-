import User from "../Model/User.model.js";

export const createUser = async (userData) => {
  const { name, email, age } = userData;
  if (!name || !email || !age) {
    throw new Error("Please fill all the fields");
  }
  const user = new User({
    name,
    email,
    age,
  });
  const userAdded = await user.save();
  return userAdded;
};

export const getAllUser = async () => {
  const showdata = await User.find();
  return showdata;
};

export const userFindById = async (userData) => {
  const { id, body } = userData;
  const showdata = await User.findByIdAndUpdate(id, body, {
    new: true,
  });
  return showdata;
};

export const userDeleteById = async (id) => {
  const showdata = await User.findByIdAndDelete(id);
  return showdata;
};
