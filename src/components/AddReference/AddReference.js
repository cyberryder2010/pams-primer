import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, TextField, Grid } from "@material-ui/core";

class AddReference extends Component {
  state = {
    title: "",
    description: "",
  };

  changeNewReference = (fieldKey) => (event) => {
    this.setState({
      [fieldKey]: event.target.value,
    });
  };

  saveNewReference = (event) => {
    this.props.dispatch({
      type: "POST_REFERENCE",
      payload: this.state,
    });

    // clear form field
    this.setState({
      title: "",
      description: "",
    });
  };

  render() {
    return (
      <div>
        <h3>Add Reference</h3>
        <Grid container spacing={2}>
          <Grid item xs={3} md={6}>
            <TextField
              placeholder="Title"
              type="text"
              value={this.state.title}
              onChange={this.changeNewReference("title")}
              fullWidth={true}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={9} md={6}>
            <TextField
              placeholder="Description"
              type="text"
              fullWidth={true}
              value={this.state.description}
              onChange={this.changeNewReference("description")}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Button
          onClick={this.saveNewReference}
          variant="contained"
          color="secondary"
        >
          Save Reference
        </Button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AddReference);
