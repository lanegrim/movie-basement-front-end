import React, { Component } from "react";
import axios from "axios";
import Movie from "./components/Movie";

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
        this.getMovie();
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
        this.getMovie();
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
        {this.state.movies.map((movie) => {
          return <Movie movie={movie} />;
        })}
      </div>
    );
  }
}

export default App;
