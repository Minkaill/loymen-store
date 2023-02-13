import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization:
      "Bearer " +
      "fc17e02248826dda87da3264f66aa97332d1bee6229fb4f93c2153719d2f86e1f5717966177c93c1226ae60300a9b9270eca8cb7f388c7104341624246f413e43bdad83a55a33bf03942de149a76b78a5d751638bc93ef8b0546b41d8c27674052fe890950122f76bc1eecf3e4ce3e7565dd9b3db0c36c372574018c392ac506",
  },
});

export default instance;
