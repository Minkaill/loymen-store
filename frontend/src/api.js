import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization:
      "Bearer " +
      "7277f5a1724386f9635a10022f6e2c3a7beb270d992389422ce528a49d86c0218e77748e9aa690f237d7ce31801303eb4283f307a1bf9d0f41710210c878d0d69e1061e3e079c33f39c224e3d1fd8970dc2cf1923fc5e69875fb7945883beca0dd5734fbe80a43b26163f7c755703920ae8e60b487e4004f66bdb768dbc7f2b8",
  },
});

export default instance;
