import axios from 'axios'

// สร้าง instance ของ axios
const client = axios.create({
  baseURL: 'http://localhost:3000', // URL ของ backend (Nest.js)
})

// Interceptors สำหรับการจัดการ request
client.interceptors.request.use(
  config => {
    // ตัวอย่าง: การเพิ่ม token ถ้ามี
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config
  },
  error => {
    // ทำบางอย่างกับ error request
    return Promise.reject(error)
  },
)

// Interceptors สำหรับการจัดการ response
client.interceptors.response.use(
  response => {
    // จัดการกับข้อมูล response ที่ได้
    return response.data // คืนค่าเฉพาะ data
  },
  error => {
    // ทำบางอย่างกับ error response
    const status = error.response ? error.response.status : null
    if (status === 401) {
      // จัดการกรณี Unauthorized
      console.error('Unauthorized access - Redirecting to login...')
    } else if (status === 404) {
      console.error('Resource not found')
    } else {
      console.error('An error occurred:', error.message)
    }
    return Promise.reject(error)
  },
)

export default client
