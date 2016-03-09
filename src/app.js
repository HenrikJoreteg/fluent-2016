import React from 'react'
import Nav from './components/nav'
import { connect } from 'react-redux'
import NavHelper from 'react-internal-nav'
import { updateUrl, doLogin, doLogout } from './actions'
import renderUrl from './helpers/render-url'
import { currentPageSelector } from './selectors'

export const App = (props) => {
  const { CurrentPage, userData, doLogout, updateUrl, url } = props
  let nav

  renderUrl(url)

  if (url !== '/') {
    nav = <Nav userData={userData} doLogout={doLogout}/>
  }

  return (
    <NavHelper onInternalNav={updateUrl}>
      {nav}
      <div className='container'>
        <CurrentPage/>
      </div>
    </NavHelper>
  )
}

const select = (state) => {
  return {
    CurrentPage: currentPageSelector(state),
    url: state.route.url,
    userData: state.me.data
  }
}

const actionCreatorsToBind = {
  updateUrl,
  doLogin,
  doLogout
}

export default connect(select, actionCreatorsToBind)(App)
