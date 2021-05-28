import React from 'react'

class Header extends React.Component {
  render = () => {
    return (
      <div className='navbar'>
        <ul>
          <li className='nav-item'>
            <a href='#'>Sign Up</a>
          </li>
          <li className='nav-item'>
            <a href='#'>Log In</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header