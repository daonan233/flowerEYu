// 引入css样式
import './styles/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.locale('zh-cn') // 全局使用

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(dayjs())
app.use(router)

app.mount('#app')
app.config.globalProperties.$filters = {
  relativeTime(value) {
    return dayjs().to(dayjs(value));
  }
};

