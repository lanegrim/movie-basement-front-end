import React, { Component } from "react";

class EditForm extends Component {
  render() {
    return (
      <div className="edit">
        <button value={this.props.movie.id} onClick={this.props.deleteMovie}>
          Delete Movie
        </button>
        <details>
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
              onChange={this.props.handleChange}
            />
            <br />

            <label htmlFor="image">image</label>
            <br />
            <input
              required
              type="text"
              id="image"
              onChange={this.props.handleChange}
            />
            <br />
            <br />
            <label htmlFor="synopsis">synopsis</label>
            <br />
            <input
              required
              type="text"
              id="synopsis"
              onChange={this.props.handleChange}
            />
            <br />
            <br />
            <label htmlFor="year">year</label>
            <br />
            <input
              required
              type="text"
              id="year"
              onChange={this.props.handleChange}
            />
            <br />
            <br />
            <label htmlFor="rating">rating</label>
            <br />
            <input
              required
              type="text"
              id="rating"
              onChange={this.props.handleChange}
            />
            <br />
            <input type="submit" value="Update Movie" />
          </form>
        </details>
      </div>
    );
  }
}

export default EditForm;
