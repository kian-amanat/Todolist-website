import { getfetchData } from "./api.js";

export async function handleChange(
  inputVal,
  descriptionVal,
  setDes,
  setInputs,
  isComplete,
  setError
) {
  let newInput = inputVal.current.value;
  let newDescription = descriptionVal.current.value;

  if (newInput && newDescription) {
    const titleString = [newInput].join(", ");
    const descriptionString = [newDescription].join(", ");
    const isCompleteString = String(isComplete);

    const customString = `{"title": "${titleString}", "description": "${descriptionString}", "isComplete": "${isCompleteString}"}`;

    setDes((prevDes) => [...prevDes, newDescription]);
    setInputs((prevInputs) => [...prevInputs, newInput]);

    const data = {
      title: [newInput],
      description: [newDescription],
      isComplete: isComplete,
    };

    console.log(data);

    try {
      const response = await fetch("http://localhost:3001/post/task/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: customString,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log(responseData);

      inputVal.current.value = "";
      descriptionVal.current.value = "";
    } catch (error) {
      console.error("Error:", error);
    }
  } else {
    setError(true);
  }
}

export const updatefetchData = async (inputVal, descriptionVal, isComplete) => {
  let newInput = inputVal.current.value;
  let newDescription = descriptionVal.current.value;

  const titleString = [newInput].join(", ");
  const descriptionString = [newDescription].join(", ");
  const isCompleteString = String(isComplete);

  const customString = `{"title": "${titleString}", "description": "${descriptionString}", "isComplete": "${isCompleteString}"}`;

  const data = {
    title: [newInput],
    description: [newDescription],
    isComplete: isComplete,
  };

  console.log(data);
  // let getData = await getfetchData(61, true);
  // console.log(getData.rows);
  try {
    const response = await fetch("http://localhost:3001/post/task/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: customString,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error("Error:", error);
  }
};
