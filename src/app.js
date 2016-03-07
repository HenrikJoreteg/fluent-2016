import React from 'react'
import LoginPage from './pages/login'
import Nav from './components/nav'
import { connect } from 'react-redux'

const App = ({url}) => {
  let page
  let nav

  if (url === '/') {
    page = <LoginPage/>
  }

  if (url !== '/') {
    nav = <Nav/>
  }

  return (
    <div>
      {nav}
      <div className='container'>
        {page}
      </div>
    </div>
  )
}

const select = (state) => {
  return {
    url: state.route.url
  }
}

export default connect(select)(App)
