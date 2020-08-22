import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Notice from '@/components/NoticePage'
import StatisticPage from '@/components/StatisticPage'
import ResultPage from '@/components/ResultPage'
import EventPage from '@/components/EventPage'
import InfoPage from '@/components/InfoPage'
import LoadingPage from '@/components/LoadingPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/notice',
      name: 'NoticePage',
      component: Notice
    },
    {
      path: '/result',
      name: 'ResultPage',
      component: ResultPage
    },
    {
      path: '/statistics',
      name: 'StatisticPage',
      component: StatisticPage
    },
    {
      path: '/event',
      name: 'EventPage',
      component: EventPage
    },
    {
      path: '/info',
      name: 'InfoPage',
      component: InfoPage
    },
    {
      path: '/loading',
      name: "LoadingPage",
      component: LoadingPage
    }
  ]
})
