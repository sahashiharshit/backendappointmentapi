const Users = require("../models/user");
exports.postUsers = async (req, res, next) => {
  const { username, email, phone } = req.body;
  try {
    const newUser = await Users.create({
      username: username,
      email: email,
      phone: phone,
    });
    res.status(201).json({
      data: newUser,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error adding user",
      error: err.message,
    });
  }
};
exports.getUsers = (req, res, next) => {
  try {
    Users.findAll().then((result) => {
      res.status(200).json({
        res: result,
      });
    });
  } catch (err) {
    console.log(err);
  }
};
exports.getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Users.findByPk(id);
    res.status(200).json({
      message: "User retrieved successfully",
      data: user,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteUser = async (req, res) => {
const {id} =req.params;
try{
    const deletedUser = await Users.destroy({
        where:{id}
    });
    res.status(200).json({
        message:'user deleted succesfully'
    })
}catch(err){

}

};
