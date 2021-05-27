import React from 'react'

class App extends React.Component {
  render = () => {
    return (
      <div className='navbar'>
        <ul className="nav nav-tabs justify-content-end">
            <li className='nav-item'>
                <a className="nav-link active" href='#'>Sign Up</a>
            </li>
            <li className='nav-item'>
                <a className="nav-link active" href='#'>Log In</a>
            </li>
        </ul>
      </div>
    )
  }
}

export default App