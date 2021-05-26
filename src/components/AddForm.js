import React, { Component } from 'react'
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
    }

    callAPI = () => {
        axios
            .get("http://www.omdbapi.com/?" + "t=" + this.state.title_search + "apikey=" + process.env.APIKEY)
            .then(
                (response) => this.setState({
                    title: response.data.Title,
                    image: response.data.Poster,
                    year: response.data.Year,
                    synopsis: response.data.Plot,
                }),
                (err) => console.error(err)
            )
            .catch((error) => console.error(error));
    };


    render() {
        return (
            <div>
                <h2>Create New Movie</h2>
                <h3>Search for Movie Info</h3>
                <form>
                    <label htmlFor="title_search">Title:</label>
                    <br />
                    <input
                        type="text"
                        id="title_search"
                        onChange={this.handleChange}
                        value={this.state.title_search}
                    />
                </form>
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
            </div>
        )
    }
}


// // Move to app.js
// // Refactor appropriately
// addMovie = (movie) => {
//     axios.post('http://localhost:8000/api/characters', movie)
//         .then((response) => {
//             this.getMovies()
//             this.setState({
//                 title: "",
//                 image: "",
//                 year: "",
//                 synopsis: "",
//                 rating: "",
//                 title_search: "",
//             })
//         })
// }