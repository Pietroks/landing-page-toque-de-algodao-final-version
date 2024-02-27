import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast from 'vue-toastification'
import DetalhesProduto from './components/DetalhesProduto.vue'
import "vue-toastification/dist/index.css";

const routes = [
    { path: '/', component: App },
    { path: '/detalhes-produto/:id', component: DetalhesProduto, props: true },
  ]

  





const app = createApp(App)

app.use(router)
app.use(Toast)
app.mount('#app')
