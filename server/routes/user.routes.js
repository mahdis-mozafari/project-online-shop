const{ Router } =require("express") ;
const {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} = require("../controllers/user.controllers.js");

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports= router;