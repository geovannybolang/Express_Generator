const req = require('express/lib/request');
const res = require('express/lib/response');
const User = require('./model');

const index = async (req, res, next) => {
    try {
        const users = await User.find();
        res.send({ status: "success", message: "list user", data: users }); 
    }   catch (error) {
        res.send({ status: "error", message: error.message });
    }
    
  };

  const getUserById = async (req, res, next) => {
      try {
          const users = await User.findById(req.params.id);
          if (users) {
              res.send({ status: "success", message: "single users", data: users });
          } else {
              res.send({ status: "warning", message: "user tidak ditemukan"});
          }
      } catch (error) {
          res.send({ status: "error", message: error.message });
      }
  };

  const postUser = async (req, res, next) => {
      try {
          const { name, age, status } = req.body;
          const newUser = await User.create({
              name: name,
              age: age,
              status: status,
          });
          res.send({ status: "success", message: "adding user", data: newUser });
      } catch (error) {
          res.send({ status: "error", message: error.message });
      }
  };

  const putUser = async (req, res, next) => {
      try {
          const upUser = {
              $set: {
                  name: req.body.name,
                  age: req.body.age,
                  status: req.body.status,
              }
          };
          const up = await User.updateOne({_id: req.params.id});
          if (error) {
              res.send({ status: "error", message: error.message});
          } else {
              res.send({ status: "success", message: "updated user", addedData: upUser});
          }
      } catch (error) {
          res.send({ status: "error", message: error.massage });
      }
  }

  const deleteUser = async (req, res, next) => {
      try {
          const delUser = await User.findById(req.params.id);
          const del = await User.deleteOne({_id: req.params.id});
          res.send({ status: "success", message: "deleted user", data: delUser });
      } catch (error) {
          res.send({ status: "error", message: error.message});
      }
  };

module.exports = {
    index,
    getUserById,
    postUser,
    putUser,
    deleteUser,

};