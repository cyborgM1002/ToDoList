import axios from "axios";
import { nodeServer } from "../../env";

export const getUserDetails = async function () {
  const URL = `${nodeServer}/users/me`;
  return await axios.get(URL, { withCredentials: true }).then((response) => {
    console.log(response);
    return response?.data;
  });
};
