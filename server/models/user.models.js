const db =require( "../db/connection.js")

 const getAllUsersModel = async () => {
    const query = "select * from users";
    const [users] = await db.execute(query);
    return users;
  };
  
   const getUserByIdModel = async (id) => {
    const query = "select * from users where userId = ?";
    const [user] = await db.execute(query, [id]);
    return user[0];
  };
  
   const createUserModel = async ({
    firstName,
    lastName = null,
    email = null,
    phone = null,
  }) => {
    const query =
      "insert into users(firstName, lastName, email, phone) values(?, ?, ?, ?)";
    const [{ insertId }] = await db.execute(query, [
      firstName,
      lastName,
      email,
    ]);
    return insertId;
  };
  
   const updateUserModel = async (
    id,
    { firstName, lastName = null, email = null, phone = null }
  ) => {
    if (!id) return "user id is required!";
  
    const query =
      "update users set firstName = ?, lastName = ?, email = ?, phone = ? where userId = ?";
    const [{ changedRows }] = await db.execute(query, [
      firstName,
      lastName,
      email,
      id,
    ]);
    return changedRows;
  };
  
   const deleteUserModel = async (id) => {
    if (!id) return "user id is required!";
  
    const query = "delete from users where userId = ?";
    const [{ affectedRows }] = await db.execute(query, [id]);
    return affectedRows;
  };

  models.exports ={
  deleteUserModel,
  updateUserModel,
  createUserModel,
  getAllUsersModel,
  getUserByIdModel,
  }