import React, { Component } from "react";
import EditForm from './EditForm'

class Movie extends Component {
  render() {
    return (
      <div>
        <div className="movie">
          <h4>{this.props.movie.title}</h4>
          <img src={this.props.movie.image} alt={this.props.movie.title} />
          <p>{this.props.movie.synopsis}</p>
          <h4> released: {this.props.movie.year}</h4>
          <h4>{this.props.movie.rating}</h4>
          <EditForm movie={this.props.movie}
            handleChange={this.props.handleChange}
            deleteMovie={this.props.deleteMovie}
            updateMovie={this.props.updateMovie} />
        </div>
      </div>
    );
  }
}

export default Movie;
