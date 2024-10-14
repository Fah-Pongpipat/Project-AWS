import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()) // สำหรับการจัดการ state (ถ้าใช้)
app.use(router) // สำหรับ routing (ถ้ามี)

app.mount('#app') // ติดตั้งแอปไปที่ element ที่มี id เป็น 'app'
