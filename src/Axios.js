import axios from "axios";
const handler = axios.create({
    baseURL:"http://localhost:8000/"
})
export default handler