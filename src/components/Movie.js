import React, { Component } from "react";
import EditForm from "./EditForm";

class Movie extends Component {
  render() {
    return (
      <div>
        <div className="movie-card">
          <div className="movie-image-data">
            <div className="background-image">
              <img src={this.props.movie.image} alt={this.props.movie.title} />
              <div className="movie-info">
                <span className="date">
                  <i class="fas fa-calendar-alt"></i> released: {""}
                  {this.props.movie.year}
                </span>
              </div>
            </div>
          </div>
          <div className="card-content">
            <h4>{this.props.movie.title}</h4>
            <p>{this.props.movie.synopsis}</p>

            <h4>{this.props.movie.rating}</h4>
          </div>
          <EditForm
            movie={this.props.movie}
            handleChange={this.props.handleChange}
            deleteMovie={this.props.deleteMovie}
            updateMovie={this.props.updateMovie}
          />
        </div>
      </div>
    );
  }
}

export default Movie;
