import {
  getUsersById,
  createUsers,
  updateUsersById,
  getUserByUserName,
} from "../../model/user/index.js";

import {
  createUserService,
  loginUserService,
} from "../../services/user/service.js";
const getUserbyUserNameController = async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (!req.body) {
      console.log("you doesnt add your name & last_name");
    } else {
      await getUserByUserName(userName, password);
      res.json({
        message: " name and last-Name is declered ",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getUsersController = async (req, res) => {
  try {
    let userId = req.params.id;
    if (!userId) {
      confirm.log("you doesn't add your user id");
    } else {
      const getUser = await getUsersById(userId);
      res.json(getUser);
    }
  } catch (error) {
    console.log(error);
  }
};

const createUserController = async (req, res, next) => {
  try {
    const userData = req.body;

    if (!userData || !userData.userName || !userData.password) {
      return res.status(400).json({
        message: "You must provide both name and last name.",
      });
    }
    const createUserRes = await createUserService(
      userData.userName,
      userData.password
    );
    res.status(201).json({
      message: "user created succesfully.",
    });
  } catch (error) {
    res.json({
      message: `your User doesnt add to database for that resaon => ${error}`,
    });
  }
};

const loginUserController = async (req, res, next) => {
  try {
    const userData = req.body;
    console.log(" c =>>>>", userData);
    if (!userData || !userData.userName || !userData.password) {
      return res.status(401).json({
        message: "You must provide both username and password",
      });
    }
    const jwt = await loginUserService(userData.userName, userData.password);

    res.status(200).json({
      jwt: jwt,
    });
  } catch (error) {
    res.json({
      message: `your User doesnt add to database for that resaon => ${error}`,
    });
  }
};
const updateUserController = async (req, res) => {
  try {
    let updateUserId = req.params.id;
    let { name, lastName } = req.body;
    if (!updateUserId && !req.body) {
      console.log("add your data");
    } else {
      const updateUser = await updateUsersById(updateUserId, name, lastName);
      res.json({
        message: "user is updated",
      });
    }
  } catch (error) {
    res.json({
      message: `your User connot update for that resaon => ${error}`,
    });
  }
};
export {
  getUsersController,
  createUserController,
  updateUserController,
  getUserbyUserNameController,
  loginUserController,
};
