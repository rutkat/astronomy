import axios from "axios";

const KEY = "YMmBrCYBsxnUkVBzgxjxp24bcYFmINxcazNhVw99";

export default axios.create({
  baseURL: "https://api.nasa.gov/planetary",
  params: {
    date: "",
    api_key: KEY,
  },
});
