import React, { Component } from "react";
import EditForm from "./EditForm";

class Movie extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row px-xl-5 px lg-0">
            <div className="col-md-4">
              <div className="main">
                <div className="movie-img">
                  <img
                    src={this.props.movie.image}
                    className="backimg"
                    alt={this.props.movie.title}
                  />
                  <img
                    src={this.props.movie.image}
                    className="movie-cover"
                    alt={this.props.movie.title}
                  />
                </div>
                <h4 className="content-title">{this.props.movie.title}</h4>
                <div className="head1 center-text">
                  <p>Rating</p>
                  <p>Released</p>
                </div>
                <div className="head2 center-text">
                  <p>{this.props.movie.rating}</p>
                  <p>{this.props.movie.year}</p>
                </div>
                <div className="head3 center-text">
                  <p>{this.props.movie.synopsis}</p>
                  <div className="editform">
                    <EditForm
                      movie={this.props.movie}
                      handleChange={this.props.handleChange}
                      deleteMovie={this.props.deleteMovie}
                      updateMovie={this.props.updateMovie}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
