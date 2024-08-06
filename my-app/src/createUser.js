export async function createdUserData(firstName, lastName) {
  let first = firstName.current.value;
  let last = lastName.current.value;

  if (first && last) {
    let firstNameString = [first].join(", ");
    let lastNameString = [last].join(", ");

    const sendString = `{
   "name": "${firstNameString}" 
   , "lastName": "${lastNameString}"
   }`;

    const data = {
      name: [first],
      lastName: [last],
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

      firstName.current.value = "";
      lastName.current.value = "";
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
