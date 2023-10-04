import axios from "axios";
const handler = axios.create({
    baseURL:"http://localhost:3002/"
})
export default handler