import { wrapFunctional } from './utils'

export { default as GameFooter } from '../../components/GameFooter.vue'
export { default as GameMenu } from '../../components/GameMenu.vue'
export { default as LeaderboardHeader } from '../../components/LeaderboardHeader.vue'
export { default as LeaderboardTime } from '../../components/LeaderboardTime.vue'
export { default as LeaderboardUser } from '../../components/LeaderboardUser.vue'
export { default as Search } from '../../components/Search.vue'
export { default as VotesReceived } from '../../components/VotesReceived.vue'

export const LazyGameFooter = import('../../components/GameFooter.vue' /* webpackChunkName: "components/game-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyGameMenu = import('../../components/GameMenu.vue' /* webpackChunkName: "components/game-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyLeaderboardHeader = import('../../components/LeaderboardHeader.vue' /* webpackChunkName: "components/leaderboard-header" */).then(c => wrapFunctional(c.default || c))
export const LazyLeaderboardTime = import('../../components/LeaderboardTime.vue' /* webpackChunkName: "components/leaderboard-time" */).then(c => wrapFunctional(c.default || c))
export const LazyLeaderboardUser = import('../../components/LeaderboardUser.vue' /* webpackChunkName: "components/leaderboard-user" */).then(c => wrapFunctional(c.default || c))
export const LazySearch = import('../../components/Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c))
export const LazyVotesReceived = import('../../components/VotesReceived.vue' /* webpackChunkName: "components/votes-received" */).then(c => wrapFunctional(c.default || c))
