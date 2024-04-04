import User from "../Model/User.model.js";

export const createUser = async (request) => {
  try {
    const { name, email, age } = request;
    if (!name || !email || !age) {
      return response.status(400).json({
        message: "plz fill all the filed",
      });
    }
    const user = new User({
      name,
      email,
      age,
    });
    const userAdded = await user.save();
    return userAdded;
  } catch (error) {
    throw error;
  }
};

export const getAllUser = async () => {
  try {
    const showdata = await User.find();
    return showdata;
  } catch (error) {
    throw error;
  }
};

export const userFindById = async (id, body) => {
  try {
    const showdata = await User.findByIdAndUpdate(id, body, {
      new: true,
    });
    return showdata;
  } catch (error) {
    throw error;
  }
};

export const userDeleteById = async (id) => {
  try {
    const showdata = await User.findByIdAndDelete(id);
    return showdata;
  } catch (error) {
    throw error;
  }
};
