import React, { useRef, useState } from "react";
import { getfetchData } from "./api.js";

export async function createdUserData(firstName, lastName) {
  let first = firstName.current.value;
  let last = lastName.current.value;

  if (first && last) {
    let firstNameString = [first].join(", ");
    let lastNameString = [last].join(", ");

    const sendString = `{
   "userName": "${firstNameString}" 
   , "password": "${lastNameString}"
   }`;

    const data = {
      userName: [first],
      password: [last],
    };

    try {
      const response = await fetch("http://localhost:3001/create/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: sendString,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log(responseData);
      if (!responseData) {
        console.log(false);
      }

      firstName.current.value = "";
      lastName.current.value = "";
      return true;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  }
}

export async function logInUserData(firstName, lastName) {
  let first = firstName.current.value;
  let last = lastName.current.value;

  if (first && last) {
    let firstNameString = [first].join(", ");
    let lastNameString = [last].join(", ");

    const sendString = `{
      "userName": "${firstNameString}",
      "password": "${lastNameString}"
    }`;

    try {
      const response = await fetch("http://localhost:3001/api/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: sendString,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log(responseData);

      if (!responseData) {
        console.log(false);
      }

      firstName.current.value = "";
      lastName.current.value = "";
      return true;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  }
  return false;
}
