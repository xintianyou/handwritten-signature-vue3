import { createApp } from 'vue'
import App from './App.vue'
import handwrittenSignature from 'handwritten-signature-vue3'
import 'handwritten-signature-vue3/style.css'

const app = createApp(App)
app.use(handwrittenSignature)

app.mount('#app')
