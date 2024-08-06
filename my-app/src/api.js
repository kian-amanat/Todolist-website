import axios from "axios";
const API_URL = "http://localhost:3001/";

const getfetchData = async (id) => {
  try {
    const res = await axios.get(`${API_URL}get/task/${id}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const createfetchData = async () => {
  try {
    const res = await axios.post(`${API_URL}post/task/add`);

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const removeFetchData = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}delet/task/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export { getfetchData, createfetchData, removeFetchData };
