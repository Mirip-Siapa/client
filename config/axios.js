const axios = require('axios')

const axiosServer = axios.create({
    baseURL: `http://localhost:3000`,
    headers: {
      "access_token": localStorage.getItem('token')
    }
})

module.exports = {
  axiosServer
}