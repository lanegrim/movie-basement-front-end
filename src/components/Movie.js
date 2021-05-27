import React, { Component } from "react";

class Movie extends Component {
  render() {
    return (
      <div>
        <h1> Movie Basement</h1>
        <div className="movie">
          <h4>{this.props.movie.title}</h4>
          <img src={this.props.movie.image} />
          <p>{this.props.movie.synopsis}</p>
          <h4> released: {this.props.movie.year}</h4>
          <h4>{this.props.movie.rating}</h4>
          <button value={this.props.movie.id} onClick={this.deleteMovie}>
            Delete Movie
          </button>
        </div>
      </div>
    );
  }
}

export default Movie;
