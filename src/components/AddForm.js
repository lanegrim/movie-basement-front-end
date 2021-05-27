import React, { Component } from 'react'
import axios from "axios";

export default class AddForm extends Component {
    state = {
        title: "",
        image: "",
        year: "",
        synopsis: "",
        rating: "",
        title_search: "",
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addMovie(this.state)
        this.setState({
            title: "",
            image: "",
            year: "",
            synopsis: "",
            rating: "",
            title_search: "",
        })
    }

    callAPI = (event) => {
        event.preventDefault()
        this.setState({
            title: "",
            image: "",
            year: "",
            synopsis: "",
            rating: "",
            title_search: "",
        })
        axios
            .get("http://www.omdbapi.com/?t=" + this.state.title_search + "&apikey=" + process.env.REACT_APP_APIKEY)
            .then(
                (response) => this.setState({
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
                <h3>Search for Movie Info</h3>
                <form onSubmit={this.callAPI}>
                    <label htmlFor="title_search">Title:</label>
                    <br />
                    <input
                        required
                        type="text"
                        id="title_search"
                        onChange={this.handleChange}
                        value={this.state.title_search}
                    />
                    <input type="submit" value="Search for Movie" />
                </form>
                <h2>Create New Movie</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <br />
                    <input
                        required
                        type="text"
                        id="title"
                        onChange={this.handleChange}
                        value={this.state.title}
                    />
                    <br />
                    <label htmlFor="image">image:</label>
                    <br />
                    <input
                        required
                        type="text"
                        id="image"
                        onChange={this.handleChange}
                        value={this.state.image}
                    />
                    <br />
                    <label htmlFor="synopsis">synopsis:</label>
                    <br />
                    <input
                        required
                        type="text"
                        id="synopsis"
                        onChange={this.handleChange}
                        value={this.state.synopsis}
                    />
                    <br />
                    <label htmlFor="year">year:</label>
                    <br />
                    <input
                        required
                        type="text"
                        id="year"
                        onChange={this.handleChange}
                        value={this.state.year}
                    />
                    <br />
                    <label htmlFor="rating">rating:</label>
                    <br />
                    <input
                        required
                        type="text"
                        id="rating"
                        onChange={this.handleChange}
                        value={this.state.rating}
                    />
                    <br />
                    <input type="submit" value="Create Movie" />
                </form>
            </div>
        )
    }
}


