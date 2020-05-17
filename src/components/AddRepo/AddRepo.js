import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, TextField, Grid } from "@material-ui/core";

class AddRepo extends Component {
  state = {
    link: "",
    author: "",
    date: "",
  };

  changeNewRepo = (fieldKey) => (event) => {
    this.setState({
      [fieldKey]: event.target.value,
    });
  };

  saveNewRepo = (event) => {
    this.props.dispatch({
      type: "POST_REPO",
      payload: this.state,
    });

    // clear form field
    this.setState({
      link: "",
      author: "",
      date: "",
    });
  };

  render() {
    return (
      <div>
        <h3>Add Github Repo</h3>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <TextField
              placeholder="Repo"
              type="text"
              value={this.state.link}
              onChange={this.changeNewRepo("link")}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              placeholder="Author"
              type="text"
              value={this.state.author}
              onChange={this.changeNewRepo("author")}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              placeholder="Date"
              type="text"
              value={this.state.date}
              onChange={this.changeNewRepo("date")}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Button
          onClick={this.saveNewRepo}
          variant="contained"
          color="secondary"
        >
          Save Github Repo
        </Button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AddRepo);
