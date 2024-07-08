const{
    createUserModel,
    deleteUserModel,
    getAllUsersModel,
    getUserByIdModel,
    updateUserModel,
  } = "../models/user.models.js";

   const getAllUsers = async (req, res) => {
    try {
      const users = await getAllUsersModel();
      res.status(200).send(users);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "internal server error!" });
    }
  };
  
   const getUserById = async (req, res) => {
    try {
      const user = await getUserByIdModel(req.params.id);
      res.status(200).send(user);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "internal server error!" });
    }
  };
  
   const createUser = async (req, res) => {
    try {
      const userId = await createUserModel(req.body);
      res.status(200).json({ userId, ...req.body });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "internal server error!" });
    }
  };
  
   const updateUser = async (req, res) => {
    try {
      const response = await updateUserModel(req.params.id, req.body);
      if (response) {
        return res
          .status(200)
          .json({ success: true, message: "updated user successfully" });
      }
      res.status(404).json({ success: false, message: "user not found!" });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "internal server error!" });
    }
  };
  
 const deleteUser = async (req, res) => {
    try {
      const response = await deleteUserModel(req.params.id);
      if (response) {
        return res
          .status(200)
          .json({ success: true, message: "deleted user successfully" });
      }
      res.status(404).json({ success: false, message: "user not found!" });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "internal server error!" });
    }
  };

  module.exports={
    deleteUser,
    updateUser,
    createUser,
    getAllUsers,
    getUserById,
  }
  