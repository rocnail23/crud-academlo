import axios from "axios"


const axiosClient = axios.create({
baseURL: "https://usercrud-4oii.onrender.com/"
})

export default axiosClient