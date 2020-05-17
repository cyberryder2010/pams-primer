import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, TextField, Grid } from "@material-ui/core";

class AddVideo extends Component {
  state = {
    link: "",
    password: "",
    author: "",
    date: "",
  };

  changeNewVideo = (fieldKey) => (event) => {
    this.setState({
      [fieldKey]: event.target.value,
    });
  };

  saveNewVideo = (event) => {
    this.props.dispatch({
      type: "POST_VIDEO",
      payload: this.state,
    });

    // clear form field
    this.setState({
      link: "",
      password: "",
      author: "",
      date: "",
    });
  };

  render() {
    return (
      <div>
        <h3>Add Video</h3>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <TextField
              placeholder="Link"
              type="text"
              value={this.state.link}
              onChange={this.changeNewVideo("link")}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              placeholder="Password"
              type="text"
              value={this.state.password}
              onChange={this.changeNewVideo("password")}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              placeholder="Author"
              type="text"
              value={this.state.author}
              onChange={this.changeNewVideo("author")}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              placeholder="Date"
              type="text"
              value={this.state.date}
              onChange={this.changeNewVideo("date")}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Button
          onClick={this.saveNewVideo}
          variant="contained"
          color="secondary"
        >
          Save Video
        </Button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AddVideo);
