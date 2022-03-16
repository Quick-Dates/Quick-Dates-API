import axios from "axios";

const apiSuap = axios.create({
  baseURL: "https://suap.ifmt.edu.br/api/v2",
  timeout: 1000,
});

export default apiSuap;
