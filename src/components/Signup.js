import React, {Component} from "react";



class Signup extends React.Component {

  render = () => {
    return (
      <div className='auth'> 
        <nav className='nav'>
            <div className='container'>
                <ul className='nav-bar'>
                    <li>
                        <a href="#" className="nav-link">Login</a>
                    </li>
                    <li>
                        <a href="#" className="nav-link">Sign Up</a>
                    </li>
                </ul>

            </div>
        </nav>
      </div>
    )
  }
}

export default Signup