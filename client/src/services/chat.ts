import axios from "axios";

const sendMessage = async (message, token) => {
  const data = {
    message,
  };
  const res = await axios.post("/api/chat", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

const chatServices = { sendMessage };
export default chatServices;
