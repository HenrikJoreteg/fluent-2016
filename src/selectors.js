import { createSelector } from 'reselect'
import LoginPage from './pages/login'
import WatchedReposPage from './pages/watched-repos'

const meSelector = (state) => state.me
export const isLoggedInSelector = createSelector(
  meSelector,
  (meState) => {
    return !!meState.token
  }
)

// identity selectors
const routeSelector = (state) => state.route

export const currentPageSelector = createSelector(
  routeSelector,
  (routeState) => {
    const { url } = routeState
    if (url === '/') {
      return LoginPage
    }
    if (url === '/watched-repos') {
      return WatchedReposPage
    }
  }
)
