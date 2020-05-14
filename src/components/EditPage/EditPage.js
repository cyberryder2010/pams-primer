import React, { Component } from "react";
import { connect } from "react-redux";

// material component imports
import {
  Button,
  Container,
  TextField,
  Grid,
  LinearProgress,
  Box,
} from "@material-ui/core";

import ReferenceTagEditor from "../ReferenceTagEditor/ReferenceTagEditor";
import Header from "../Header/Header";

class EditPage extends Component {
  state = {
    title: "",
    description: "",
  };

  componentDidMount() {
    // dispatch to saga to call server API
    this.props.dispatch({
      type: "GET_REFERENCE",
      payload: this.props.match.params.id,
    });
    this.props.dispatch({
      type: "GET_REFERENCE_TAG",
      payload: this.props.match.params.id,
    });
  }

  changeReferenceDetails = (fieldKey) => (event) => {
    this.setState({
      [fieldKey]: event.target.value,
    });
  };

  clickCancel = (event) => {
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  clickSaveReferenceDetails = (event) => {
    // dispatch to saga to make API call
    let newDetails = {
      ...this.state,
      id: this.props.match.params.id,
    };

    if (newDetails.title == null || newDetails.title === "") {
      newDetails.title = this.props.store.details.title;
    }

    if (newDetails.description == null || newDetails.description === "") {
      newDetails.description = this.props.store.details.description;
    }

    this.props.dispatch({
      type: "PUT_REFERENCE",
      payload: newDetails,
    });
    // navigate to the details page
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  render() {
    let referenceForm = <LinearProgress />;

    if (
      this.props.match.params.id != null &&
      this.props.store.details.title != null &&
      this.props.store.details.description != null
    ) {
      referenceForm = (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              type="text"
              placeholder="New Title"
              onChange={this.changeReferenceDetails("title")}
              defaultValue={this.props.store.details.title}
              fullWidth
              variant="outlined"
              label="Reference Title"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={this.changeReferenceDetails("description")}
              defaultValue={this.props.store.details.description}
              fullWidth
              variant="outlined"
              label="Reference Description"
              multiline
              required
            />
          </Grid>
        </Grid>
      );
    }
    return (
      <div className="algnLeft">
        <Header title="Edit" backHandler={this.clickCancel}>
          <Button
            onClick={this.clickSaveReferenceDetails}
            variant="outlined"
            color="inherit"
            size="large"
          >
            Save
          </Button>
        </Header>

        <Container maxWidth={false}>
          <Box mb={4}>{referenceForm}</Box>

          <ReferenceTagEditor referenceId={this.props.match.params.id} />
        </Container>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPage);
