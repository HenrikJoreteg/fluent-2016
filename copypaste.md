# copy paste code will go here

## nav html

```
<nav className='top-nav top-nav-light cf' role='navigation'>
  <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
  <label htmlFor='menu-toggle'>Menu</label>
  <ul className='list-unstyled list-inline cf'>
    <li>Watcher-Watcher</li>
    <li><a href='/watched-repos'>Watched</a></li>
    <li className='pull-right'>User Name</li>
  </ul>
</nav>
```

## styles

```
/*
  border-box all the things!
  Paul Irish: http://www.paulirish.com/2012/box-sizing-border-box-ftw/
*/
html
  box-sizing: border-box;

*, *:before, *:after
  box-sizing: inherit


/*
  Use system fonts for maximum style + minimum size
  Credit Marcin Wichary of Medium
  https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/
*/
body
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
  "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif

@import 'yeticss'

.login
  text-align: center

  header
    margin-top: 100px

  footer
    margin-top: 20px
```

## localhost clientid

`34d32bcd940626d0d6f3`

## login page

```js
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
```

## watched repo item

```
<div>
  <span>REPO NAME</span>
  <a> unwatch <span className='octicon octicon-eye'></span></a>
</div>
```

## smart polyfills

```
export default (cb) => {
  ensurePromise(() => {
    ensureFetch(cb)
  })
}

const ensurePromise = (cb) => {
  if (!window.Promise) {
    require.ensure([], (require) => {
      require('imports?this=>window!es6-promise')
      cb()
    })
  } else {
    cb()
  }
}

const ensureFetch = (cb) => {
  if (!window.fetch) {
    require.ensure([], (require) => {
      require('whatwg-fetch')
      cb()
    })
  } else {
    cb()
  }
}
```
