import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// material-ui components
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// Custom Components
import ReferenceListItem from "../ReferenceListItem/ReferenceListItem";

class ReferenceList extends Component {
  state = {
    searchTerm: "",
  };

  componentDidMount() {
    // load up all information from the server
    this.props.dispatch({
      type: "GET_ALL_REFERENCE",
    });
  }

  clickReferenceDetails = (event, id) => {
    this.props.history.push(`/details/${id}`);
  };

  // changeSearch = (event) => {
  //   this.setState({
  //     searchTerm: event.target.value
  //   });
  // }

  render() {
    return (
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          {this.props.store.reference.map((item, index) => (
            <Grid item xs={12} sm={4} md={3} lg={2}>
              <ReferenceListItem key={index} item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default withRouter(connect(mapStoreToProps)(ReferenceList));
