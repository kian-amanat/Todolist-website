import { createUsers, getUserByUserName } from "../../model/user/index.js";
import { hash, validateHash } from "../../core/utils/index.js";
import { jwtSign } from "../../core/auth/jwt.js";

async function createUserService(userName, password) {
  //   const user = await getUserByUserName(name, lastName);
  //   if (!user) {
  const encryptionPassword = await hash(password);
  const createUserRes = await createUsers(userName, encryptionPassword);
  return createUserRes;
  //   } else {
  //     throw new Error(`The ${name + lastName} is already exist !`);
  //   }
}

async function loginUserService(username, password) {
  const user = await getUserByUserName(username);

  if (!user) {
    throw new Error(`User not found.`);
  } else {
  }

  const validatedHash = await validateHash(password, user[0].password);

  if (!validatedHash) {
    throw new Error(`Invalid password.`);
  }

  const jwtUserData = {
    id: user[0].id,
    username: user[0].user_name,
  };

  const userJwt = jwtSign(jwtUserData);
  return userJwt;
}

export { createUserService, loginUserService };
