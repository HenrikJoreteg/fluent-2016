import React from 'react'
import LoginPage from './pages/login'
import Nav from './components/nav'
import { connect } from 'react-redux'
import NavHelper from 'react-internal-nav'
import { updateUrl } from './actions'

const App = ({updateUrl, url}) => {
  let page
  let nav

  if (url === '/') {
    page = <LoginPage/>
  }

  if (url !== '/') {
    nav = <Nav/>
  }

  return (
    <NavHelper onInternalNav={updateUrl}>
      {nav}
      <div className='container'>
        {page}
      </div>
    </NavHelper>
  )
}

const select = (state) => {
  return {
    url: state.route.url
  }
}

export default connect(select, {updateUrl})(App)
