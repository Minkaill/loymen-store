import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization:
      "Bearer " +
      "85bc05db024579c21f441de3f757d6023d6b248cb4aee789998f713c740391e59e305ab1a6392414e6b4df1ae7697bb0fc6d6d1bb0b8ab10dd4407fd6f0e8ebe515517a24e160dc20a424704de6cc4149fe42642e2917a2e9e6a70b2c0284b65ae5109bcb6d4f8fccbbc2e0f23aeace61a43779526f3cf1fe808d4cdee78a45f",
  },
});

export default instance;
