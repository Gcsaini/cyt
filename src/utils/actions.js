import axios from "axios";
import { getToken } from "./jwt";

// export async function fetchById(url) {
//   // try {
//   //   const response = await axios.get(url);
//   //   return response.data;
//   // } catch (err) {
//   //   if (err.response) {
//   //     // The request was made and the server responded with a status code
//   //     // that falls out of the range of 2xx
//   //     setError(`Error: ${err.response.status} - ${err.response.data}`);
//   //   } else if (err.request) {
//   //     // The request was made but no response was received
//   //     throw "Network error: No response received";
//   //   } else {
//   //     // Something happened in setting up the request that triggered an Error
//   //     throw err.message;
//   //   }
//   // }

//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     if (error.response) {
//       // Server responded with a status code out of the range of 2xx
//       console.error(`Error: ${error.response.status} - ${error.response.data}`);
//       throw new Error(
//         `Error: ${error.response.status} - ${error.response.data}`
//       );
//     } else if (error.request) {
//       // Request was made but no response was received
//       console.error("Networasdasdk error: No response received");
//       throw new Error("Netwasdasdork error: No response received");
//     } else {
//       // Something happened in setting up the request
//       console.error(`Error: ${error.message}`);
//       throw new Error(`Error: ${error.message}`);
//     }
//   }
// }

export const fetchById = (url) => {
  return new Promise((resolve, reject) => {
    const token = getToken();
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const postFormData = (url, formData) => {
  return new Promise((resolve, reject) => {
    const token = getToken();
    axios
      .post(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const postData = (url, data) => {
  return new Promise((resolve, reject) => {
    const token = getToken();
    axios
      .post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
