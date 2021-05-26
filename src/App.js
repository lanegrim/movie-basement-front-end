import React, { Component } from "react";

import Movie from './components/EditForm'
import axios from "axios";

class App extends Component {
  state = {
    title: "",
    image: "",
    year: "",
    synopsis: "",
    rating: "",
    movies: [],
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://movie-basement-api.herokuapp.com/api/movies", this.state)
      .then((response) => {
        this.getMovie();
      });
  };
  getMovie = () => {
    axios
      .get("https://movie-basement-api.herokuapp.com/api/movies")
      .then(
        (response) => this.setState({ movies: response.data }),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error));
  };
  deleteMovie = (event) => {
    axios
      .delete(
        "https://movie-basement-api.herokuapp.com/api/movies/" +
          event.target.value
      )
      .then((response) => {
        this.getPeople();
      });
  };
  updateMovie = (event) => {
    event.preventDefault();
    const id = event.target.id;
    axios
      .put(
        "https://movie-basement-api.herokuapp.com/api/movies/" + id,
        this.state
      )
      .then((response) => {
        this.getPeople();
        this.setState({
          title: "",
          image: "",
          year: "",
          synopsis: "",
          rating: "",
        });
      });
  };
  componentDidMount = () => {
    this.getMovie();
  };
  render() {
    return (
      <div>
        <h1> Movie Basement </h1>
        <h2>Create New Movie</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            id="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <br />
          <label htmlFor="image">image:</label>
          <br />
          <input
            type="text"
            id="image"
            onChange={this.handleChange}
            value={this.state.image}
          />
          <br />
          <label htmlFor="synopsis">synopsis:</label>
          <br />
          <input
            type="text"
            id="synopsis"
            onChange={this.handleChange}
            value={this.state.synopsis}
          />
          <br />
          <label htmlFor="year">year:</label>
          <br />
          <input
            type="text"
            id="year"
            onChange={this.handleChange}
            value={this.state.year}
          />
          <br />
          <label htmlFor="rating">rating:</label>
          <br />
          <input
            type="text"
            id="rating"
            onChange={this.handleChange}
            value={this.state.rating}
          />
          <br />
          <input type="submit" value="Create Movie" />
        </form>
        {this.state.movies.map((movie) => {
          return 
        })}
      </div>
    );
  }
}

export default App;
