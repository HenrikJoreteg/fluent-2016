import React from 'react'

const LoginPage = () => {
  return (
    <div className='login'>
      <header role='banner'>
        <h1>Watcher-Watcher</h1>
      </header>
      <div className='content'>
        <a className='button button-large login-button'>
          <span className='mega-octicon octicon-mark-github'></span> Login with GitHub
        </a>
      </div>
      <footer>
        <p>Who watches the watchers?</p>
      </footer>
    </div>
  )
}

export default LoginPage
