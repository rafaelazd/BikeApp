import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Cadastro from '@/components/Cadastro'
import Login from '@/components/Login'
import Inicio from '@/components/Inicio'
import Config from '@/components/Config'
import AlterPerfil from '@/components/AlterPerfil'

Vue.use(Router)

export default new Router({
  routes: [
      {
      path: '/',
      name: 'Index',
      component: Index
    },
      {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
      {
      path: '/login',
      name: 'Login',
      component: Login
    },
      {
      path: '/inicio',
      name: 'Inicio',
      component: Inicio
    },
      {
      path: '/config',
      name: 'Config',
      component: Config
    },
      {
      path: '/alter-perfil',
      name: 'AlterPerfil',
      component: AlterPerfil
    }
  ]
})
