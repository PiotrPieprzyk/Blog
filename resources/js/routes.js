import StartPage from './components/StartPage/StartPage.vue'
import Galery from './components/Galery/GaleryPage.vue'
import Register from './components/Auth/RegisterPage.vue'
import Profile from './components/Profile/ProfilePage.vue'
import ProfileGraphic from './components/Profile/ProfileGraphic.vue'
import ProfileGame from './components/Profile/ProfileGame.vue'

export const routes = [
  { path: '', component: StartPage },
  { path: '/galery', component: Galery, props: { overflowType: 'auto' } },
  { path: '/register', component: Register },
  {
    path: '/profile/:id', component: Profile, name: "profile", children: [
      { path: '/profile/:id/graphic', component: ProfileGraphic, name: 'profileGraphic' },
      { path: '/profile/:id/game', component: ProfileGame, name: 'profileGame' }

    ]
  }

];