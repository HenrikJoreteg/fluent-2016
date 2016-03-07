import React from 'react'

const Nav = () => {
  return (
    <nav className='top-nav top-nav-light cf' role='navigation'>
      <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
      <label htmlFor='menu-toggle'>Menu</label>
      <ul className='list-unstyled list-inline cf'>
        <li>Watcher-Watcher</li>
        <li><a href='/watched-repos'>Watched</a></li>
        <li className='pull-right'>User Name</li>
      </ul>
    </nav>
  )
}

export default Nav
