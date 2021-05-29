import React from 'react'

class Header extends React.Component {

  addMovieButtonText = () => {
    if (this.props.showAddForm === false) {
      return ("Add a Movie")
    }
    return ("Hide New Movie Form")
  }

  render = () => {
    return (
      <div className='navbar'>
        <h1>Movie Basement</h1>
        <button onClick={this.props.toggleAddForm} className="add-button">
          {this.addMovieButtonText()}
        </button>
      </div>
    )
  }
}

export default Header