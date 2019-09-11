import StartPage from './components/StartPage/StartPage.vue'
import Galery from './components/Galery/GaleryPage.vue'
import Register from './components/Auth/RegisterPage.vue'

export const routes = [
  { path: '', component: StartPage },
  { path: '/galery', component: Galery },
  { path: '/register', component: Register },

];