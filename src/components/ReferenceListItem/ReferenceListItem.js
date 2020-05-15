import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// dependencies for custom material-ui styling
import { withStyles, createStyles } from "@material-ui/core/styles";
// material-ui components
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";

// create custom material styling
const customStyles = (theme) =>
  createStyles({
    imgMedia: {
      height: "335px",
      backgroundSizing: "cover",
    },
  });

class ReferenceListItem extends Component {
  componentDidMount() {
    // load up all information from the server
    this.props.dispatch({
      type: "GET_ALL_REFERENCE",
    });
  }

  clickReferenceDetails = (event, id) => {
    this.props.history.push(`/details/${id}`);
  };

  render() {
    const { item } = this.props;

    return (
      <Card>
        <CardActionArea
          onClick={(event) => this.clickReferenceDetails(event, item.id)}
        >
          <CardContent>
            <Typography component="h3" variant="h6">
              {item.title}
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default withStyles(customStyles)(
  withRouter(connect(mapStoreToProps)(ReferenceListItem))
);
