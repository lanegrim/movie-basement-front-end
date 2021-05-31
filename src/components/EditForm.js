import React, { Component } from "react";

class EditForm extends Component {
    render() {
        return (
            <React.Fragment>
                <button
                    className="movie-button1"
                    value={this.props.movie.id}
                    onClick={this.props.deleteMovie}
                >
                    Delete Movie
        </button>
                <details className="edit-details">
                    <summary>Edit Movie</summary>
                    <form
                        id={this.props.movie.id}
                        onSubmit={this.props.updateMovie}
                        className="editSum"
                    >
                        <label htmlFor="title">Title</label>
                        <br />
                        <input
                            required
                            type="text"
                            id="title"
                            className="edit-input"
                            onChange={this.props.handleChange}
                        />
                        <br />

                        <label htmlFor="image">image</label>
                        <br />
                        <input
                            required
                            type="text"
                            id="image"
                            className="edit-input"
                            onChange={this.props.handleChange}
                        />
                        <br />
                        <label htmlFor="synopsis">synopsis</label>
                        <br />
                        <input
                            required
                            type="text"
                            id="synopsis"
                            className="edit-input"
                            onChange={this.props.handleChange}
                        />
                        <br />
                        <label htmlFor="year">year</label>
                        <br />
                        <input
                            required
                            type="text"
                            id="year"
                            className="edit-input"
                            onChange={this.props.handleChange}
                        />
                        <br />
                        <label htmlFor="rating">rating</label>
                        <br />
                        <input
                            required
                            type="text"
                            id="rating"
                            className="edit-input"
                            onChange={this.props.handleChange}
                        />
                        <div>
                            <input type="submit" value="Update Movie" />
                        </div>
                    </form>
                </details>
            </React.Fragment>
        );
    }
}

export default EditForm;
