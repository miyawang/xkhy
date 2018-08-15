import Vue from 'vue'
import Router from 'vue-router'
import PrivateSea from '@/components/PrivateSea'
import OpenSea from '@/components/OpenSea'
import Skill from '@/components/Skill'
import Member from '@/components/Member'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PrivateSea',
      component: PrivateSea
    },
    {
      path: '/opensea',
      name: 'OpenSea',
      component: OpenSea
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    }
  ]
})
