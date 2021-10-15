import axios from "axios";
const { VUE_APP_API_KEY, VUE_APP_URL_BOOKS } = process.env;

const apiBooks = (page) => {
  console.log(process.env)
  return axios.get(VUE_APP_URL_BOOKS, {
    params: { page, apikey: VUE_APP_API_KEY },
    withCredentials: true,
  });
};

export default apiBooks;
