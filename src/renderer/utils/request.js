import axios from 'axios'

const request = axios.create({
  timeout: 3000 * 10,
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:90' : 'http://ldjun.cn:90',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
})

request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default request
