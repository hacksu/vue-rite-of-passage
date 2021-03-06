import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue';
import Chat from '@/components/GrizzlyChat.vue';
import Contact from '@/components/Contact.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
