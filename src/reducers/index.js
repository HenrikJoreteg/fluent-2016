import { combineReducers } from 'redux'
import route from './route'
import me from './me'
import watchedRepos from './watched-repos'

export default combineReducers({
  route,
  me,
  watchedRepos
})
