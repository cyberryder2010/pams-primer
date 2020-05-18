import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, TextField, Grid } from "@material-ui/core";

class AddTHT extends Component {
  state = {
    type: "",
    text: "",
  };

  changeNewTHT = (fieldKey) => (event) => {
    this.setState({
      [fieldKey]: event.target.value,
    });
  };

  saveNewTHT = (event) => {
    this.props.dispatch({
      type: "POST_THT",
      payload: this.state,
    });

    // clear form field
    this.setState({
      type: "",
      text: "",
    });
  };

  render() {
    return (
      <div>
        <h3>Add Tip, Hint, Trick</h3>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <TextField
              placeholder="Type"
              type="text"
              value={this.state.type}
              onChange={this.changeNewTHT("type")}
              fullWidth={true}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              placeholder="Text"
              type="text"
              value={this.state.text}
              onChange={this.changeNewTHT("text")}
              fullWidth={true}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Button onClick={this.saveNewTHT} variant="contained" color="secondary">
          Save Tip, Hint or Trick
        </Button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AddTHT);
