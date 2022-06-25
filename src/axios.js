// axios is a popular fetching library,fetch , post request, allows u to interact with apis very easily

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-57f4b/us-central1/api", //THE API(clod function) URL
});

export default instance;
