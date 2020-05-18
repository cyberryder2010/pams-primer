import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, TextField, Grid } from "@material-ui/core";

class AddNote extends Component {
  state = {
    title: "",
    date: "",
    text: "",
  };

  changeNewNote = (fieldKey) => (event) => {
    this.setState({
      [fieldKey]: event.target.value,
    });
  };

  saveNewNote = (event) => {
    this.props.dispatch({
      type: "POST_NOTE",
      payload: this.state,
    });

    // clear form field
    this.setState({
      title: "",
      date: "",
      text: "",
    });
  };

  render() {
    return (
      <div>
        <h3>Add Note</h3>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <TextField
              placeholder="Date"
              type="text"
              value={this.state.date}
              onChange={this.changeNewNote("date")}
              fullWidth={true}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              placeholder="Title"
              type="text"
              value={this.state.title}
              onChange={this.changeNewNote("title")}
              fullWidth={true}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              placeholder="Note Text"
              type="text"
              value={this.state.text}
              onChange={this.changeNewNote("text")}
              fullWidth={true}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Button
          onClick={this.saveNewNote}
          variant="contained"
          color="secondary"
        >
          Save Note
        </Button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AddNote);
