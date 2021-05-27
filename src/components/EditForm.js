import React, { Component } from 'react'

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="movie">
                    <h4>{this.props.movie.title}</h4>
                    <img src={this.props.movie.image} />
                    <p>{this.props.movie.synopsis}</p>
                    <h4> released: {this.props.movie.year}</h4>
                    <h4>{this.props.movie.rating}</h4>
                    <button 
                        value={ this.props.movie.id} 
                        onClick={this.props.deleteMovie}
                        >
                        Delete Movie
                    </button>
                    <details>
                      <summary>Edit Movie</summary>
                      <form id={this.props.movie.id} onSubmit={this.props.updateMovie}>
                        <label htmlFor="title">Title</label>
                        <br />
                        <input 
                            type="text" 
                            id="title" 
                            onChange={this.props.handleChange} />
                        <br />

                        <label htmlFor="image">image</label>
                        <br />
                        <input 
                            type="text" 
                            id="image" 
                            onChange={this.props.handleChange} />
                        <br />
                        <br />
                        <label htmlFor="synopsis">synopsis</label>
                        <br />
                        <input
                          type="text"
                          id="synopsis"
                          onChange={this.props.handleChange}
                        />
                        <br />
                        <br />
                        <label htmlFor="year">year</label>
                        <br />
                        <input 
                            type="text" 
                            id="year" 
                            onChange={this.props.handleChange} />
                        <br />
                        <br />
                        <label htmlFor="rating">rating</label>
                        <br />
                        <input 
                            type="text" 
                            id="rating" 
                            onChange={this.props.handleChange} />
                        <br />
                        <input type="submit" value="Update Movie" />
                      </form>
                    </details>
                  </div>
            </div>
        )
    }
}

export default App