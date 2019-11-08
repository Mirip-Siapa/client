import axios from 'axios'

const axiosServer = axios.create({
    baseURL: `http://35.198.202.197`,
    headers: {
      "access_token": localStorage.getItem('token')
    }
})

export default axiosServer