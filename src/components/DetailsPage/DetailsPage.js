import React, { Component } from "react";
import { connect } from "react-redux";

// custom material-ui styling dependencies
import { withStyles, createStyles } from "@material-ui/core/styles";
// material component imports
import { Button, Container, Grid, Typography, Box } from "@material-ui/core";

// import Header from "../Header/Header";
// import ReferenceTagEditor from "../ReferenceTagEditor/ReferenceTagEditor";

const customStyles = (theme) =>
  createStyles({
    poster: {
      width: "100%",
    },
  });

class DetailsPage extends Component {
  componentDidMount() {
    // dispatch to saga to call server API
    this.props.dispatch({
      type: "GET_REFERENCE_DETAILS",
      payload: this.props.match.params.id,
    });
  }

  clickBackToList = (event) => {
    this.props.history.push("/");
  };

  clickEditReference = (event) => {
    this.props.history.push(
      `../../reference/edit/${this.props.match.params.id}`
    );
  };

  render() {
    return (
      <div className="algnLeft">
        {/* <Header title="Details" backHandler={this.clickBackToList}>
          
        </Header> */}

        <Container maxWidth={false}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} md={9}>
              <Typography component="h2" variant="h4" gutterBottom={true}>
                {this.props.store.details.title}
              </Typography>

              <Box mb={3}>
                <Typography component="p" variant="body1" gutterBottom={true}>
                  {this.props.store.details.description}
                </Typography>
              </Box>

              <Box mb={3}>
                <Typography component="p" variant="body1" gutterBottom={true}>
                  {this.props.store.details.link_link}
                </Typography>
              </Box>

              <Box mb={3}>
                <Typography component="p" variant="body1" gutterBottom={true}>
                  {this.props.store.details.video_link}
                </Typography>
              </Box>

              <Box mb={3}>
                <Typography component="p" variant="body1" gutterBottom={true}>
                  Video Password: {this.props.store.details.password}
                </Typography>
              </Box>

              <Box mb={3}>
                <Typography component="p" variant="body1" gutterBottom={true}>
                  {this.props.store.details.repo_link}
                </Typography>
              </Box>

              <Box mb={3}>
                <Typography component="p" variant="body1" gutterBottom={true}>
                  {this.props.store.details.type}
                </Typography>
              </Box>

              <Box mb={3}>
                <Typography component="p" variant="body1" gutterBottom={true}>
                  {this.props.store.details.tip_hint_trick_text}
                </Typography>
              </Box>

              <Button
                onClick={this.clickEditReference}
                variant="outlined"
                color="inherit"
                size="medium"
              >
                Edit
              </Button>
              {/* <ReferenceTagEditor referenceId={this.props.match.params.id} /> */}
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default withStyles(customStyles)(connect(mapStoreToProps)(DetailsPage));
