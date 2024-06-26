import axios from "axios";

export async function fetchById(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("There was an error making the GET request!", error);
    // You might want to return a default value or rethrow the error
    throw error;
  }
}
