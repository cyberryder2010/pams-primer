import React, { Component } from "react";
import { connect } from "react-redux";

// material component imports
import {
  Button,
  Container,
  //   TextField,
  //   Grid,
  //   LinearProgress,
  //   Box,
} from "@material-ui/core";
import AddVideo from "../AddVideo/AddVideo";

class AddPage extends Component {
  render() {
    return (
      <div className="algnLeft">
        <AddVideo />
        <Container maxWidth={false}>
          <Button
            onClick={this.clickCancel}
            variant="outlined"
            color="inherit"
            size="large"
          >
            Cancel
          </Button>
        </Container>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AddPage);
