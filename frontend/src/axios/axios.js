import axios from "axios";

const instance=axios.create({
  baseURL:"https://mui-backend-by3k.onrender.com"
})

export default instance