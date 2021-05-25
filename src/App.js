import React, { Component } from "react";
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
        "https://movie-basement-api.herokuapp.com/api/movies" +
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
        "https://movie-basement-api.herokuapp.com/api/movies" + id,
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
          <input type="submit" value="Create Person" />
        </form>
        {this.state.movies.map((movie) => {
          return (
            <div className="movie">
              <h4>{movie.title}</h4>
              <img src={movie.image} />
              <p>{movie.synopsis}</p>
              <h4> released: {movie.year}</h4>
              <h4>{movie.rating}</h4>
              <button value={movie.id} onClick={this.deleteMovie}>
                Delete Movie
              </button>
              <details>
                <summary>Edit Person</summary>
                <form id={movie.id} onSubmit={this.updateMovie}>
                  <label htmlFor="name">Name</label>
                  <br />
                  <input type="text" id="name" onChange={this.handleChange} />
                  <label htmlFor="age">Age</label>
                  <br />
                  <input type="text" id="age" onChange={this.handleChange} />
                  <br />
                  <input type="submit" value="Update Person" />
                </form>
              </details>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
