import React, { Component } from "react";
import axios from "axios";
export default class AddForm extends Component {
  state = {
    title: "",
    image: "",
    year: "",
    synopsis: "",
    rating: "",
    title_search: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addMovie(this.state);
    this.setState({
      title: "",
      image: "",
      year: "",
      synopsis: "",
      rating: "",
      title_search: "",
    });
  };

  callAPI = (event) => {
    event.preventDefault();
    this.setState({
      title: "",
      image: "",
      year: "",
      synopsis: "",
      rating: "",
      title_search: "",
    });
    axios
      .get(
        "https://www.omdbapi.com/?t=" +
          this.state.title_search +
          "&apikey=" +
          process.env.REACT_APP_APIKEY
      )
      .then(
        (response) =>
          this.setState({
            title: response.data.Title,
            image: response.data.Poster,
            year: response.data.Year,
            synopsis: response.data.Plot,
          }),
        (error) => console.error(error)
      )
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <div>
        <div id="search-wrapper">
          <div className="movie-Search">
            <form onSubmit={this.callAPI}>
              <br />
              <input
                required
                type="text"
                placeholder="Search for Movie Info"
                id="title_search"
                onChange={this.handleChange}
                value={this.state.title_search}
              />
              <i className="fas fa-search"></i>
            </form>
          </div>
        </div>
        <div className="movie-form-container">
          <div className="movie-add">
            <div className="create-movie">Add this movie!</div>
            <form onSubmit={this.handleSubmit}>
              <div className="movie-details">
                <div className="input-box">
                  <span className="details">Title</span>
                  <input
                    required
                    type="text"
                    id="title"
                    onChange={this.handleChange}
                    value={this.state.title}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Image</span>
                  <input
                    required
                    type="text"
                    id="image"
                    onChange={this.handleChange}
                    value={this.state.image}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Synopsis</span>
                  <input
                    required
                    type="text"
                    id="synopsis"
                    onChange={this.handleChange}
                    value={this.state.synopsis}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Year</span>
                  <input
                    required
                    type="text"
                    id="year"
                    onChange={this.handleChange}
                    value={this.state.year}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Rating</span>
                  <input
                    required
                    type="text"
                    id="rating"
                    onChange={this.handleChange}
                    value={this.state.rating}
                  />
                </div>
                <div className="movie-button">
                  <input type="submit" value="Create Movie" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
