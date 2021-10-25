import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  GameFooter: () => import('../../components/GameFooter.vue' /* webpackChunkName: "components/game-footer" */).then(c => wrapFunctional(c.default || c)),
  GameMenu: () => import('../../components/GameMenu.vue' /* webpackChunkName: "components/game-menu" */).then(c => wrapFunctional(c.default || c)),
  LeaderboardHeader: () => import('../../components/LeaderboardHeader.vue' /* webpackChunkName: "components/leaderboard-header" */).then(c => wrapFunctional(c.default || c)),
  LeaderboardTime: () => import('../../components/LeaderboardTime.vue' /* webpackChunkName: "components/leaderboard-time" */).then(c => wrapFunctional(c.default || c)),
  LeaderboardUser: () => import('../../components/LeaderboardUser.vue' /* webpackChunkName: "components/leaderboard-user" */).then(c => wrapFunctional(c.default || c)),
  Search: () => import('../../components/Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c)),
  VotesReceived: () => import('../../components/VotesReceived.vue' /* webpackChunkName: "components/votes-received" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
