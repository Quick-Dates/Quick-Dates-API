import axios from "axios";

const apiSuap = axios.create({
  baseURL: "https://suap.ifmt.edu.br/api/v2",
  headers: {
    'Content-Type': 'application/json',
  }
});

export default apiSuap;
