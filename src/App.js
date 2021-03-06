import React, { Component } from "react";
import axios from "axios";
import Header from './components/Header'
import Movie from "./components/Movie"
import AddForm from "./components/AddForm"
import Footer from "./components/Footer"



class App extends Component {
  state = {
    title: "",
    image: "",
    year: "",
    synopsis: "",
    rating: "",
    movies: [],
    showAddForm: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  addMovie = (movie) => {
    axios.post('https://movie-basement-api.herokuapp.com/api/movies', movie)
      .then((response) => {
        this.getMovies()
        this.setState({
          title: "",
          image: "",
          year: "",
          synopsis: "",
          rating: "",
        })
      })
  }

  getMovies = () => {
    axios
      .get("https://movie-basement-api.herokuapp.com/api/movies")
      .then(
        (response) => this.setState({ movies: response.data.reverse() }),
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
        this.getMovies();
      });
  };

  //UPDATE 
  updateMovie = (event) => {
    event.preventDefault();
    const id = event.target.id;
    axios
      .put(
        "https://movie-basement-api.herokuapp.com/api/movies/" + id,
        this.state
      )
      .then((response) => {
        this.getMovies();
        this.setState({
          title: "",
          image: "",
          year: "",
          synopsis: "",
          rating: "",
        });
      })
      .catch((error) => console.error(error));
  };

  toggleAddForm = () => {
    this.setState({
      showAddForm: !this.state.showAddForm,
    })
  }

  //DID MOUNT
  componentDidMount = () => {
    this.getMovies();
  };

  render = () => {
    return (
      <div>
        <Header toggleAddForm={this.toggleAddForm}
          showAddForm={this.state.showAddForm} />
        <AddForm addMovie={this.addMovie}
          showAddForm={this.state.showAddForm}
          toggleAddForm={this.toggleAddForm} />
        {this.state.movies.map((movie) => {
          return <Movie movie={movie}
            handleChange={this.handleChange}
            deleteMovie={this.deleteMovie}
            updateMovie={this.updateMovie}
            key={movie.id} />;
        })}
        <Footer />
      </div>
    );
  }
}

export default App