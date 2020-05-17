import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, TextField, Grid } from "@material-ui/core";

class AddLink extends Component {
  state = {
    link: "",
    date: "",
  };

  changeNewLink = (fieldKey) => (event) => {
    this.setState({
      [fieldKey]: event.target.value,
    });
  };

  saveNewLink = (event) => {
    this.props.dispatch({
      type: "POST_LINK",
      payload: this.state,
    });

    // clear form field
    this.setState({
      link: "",
      date: "",
    });
  };

  render() {
    return (
      <div>
        <h3>Add Handy Document</h3>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <TextField
              placeholder="URL"
              type="text"
              value={this.state.link}
              onChange={this.changeNewLink("link")}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              placeholder="Date"
              type="text"
              value={this.state.date}
              onChange={this.changeNewLink("date")}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Button
          onClick={this.saveNewLink}
          variant="contained"
          color="secondary"
        >
          Save Handy Document
        </Button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AddLink);
