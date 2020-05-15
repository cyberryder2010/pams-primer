import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

// custom material-ui styling dependencies
import { withStyles, createStyles } from "@material-ui/core/styles";
// material component imports
import { Container, Grid } from "@material-ui/core";

const customStyles = (theme) =>
  createStyles({
    image: {
      width: "100%",
    },
  });

class ImagePage extends Component {
  componentDidMount() {
    // load up all images from the server
    this.props.dispatch({
      type: "GET_ALL_PICS",
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="algnRight">
        <Container maxWidth={false}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={3}>
              <img
                className={classes.image}
                src={this.props.store.source}
                alt={`${this.props.store.alt_description}`}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(customStyles)(connect(mapStoreToProps)(ImagePage));
