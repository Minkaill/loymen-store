import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization:
      "Bearer " +
      "324e382d816c6513dabd797b8c12d06e204312ed88197a56dfc3736445bfaa7f23f4959c59a7c5ecbd9b314b9444fecf71d66ff9d22966bb8c291b9c0a2233a9298900773e88e60580725ff99860b2c36013c72190d0f397e08120ee11216546f3da0ce84464362a53e994079137825314e67e276b5152bd58ac469a8e1e7b1e",
  },
});

export default instance;
