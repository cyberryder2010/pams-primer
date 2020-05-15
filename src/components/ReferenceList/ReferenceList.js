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
    let limitedResults = this.props.store.reference.filter((item, index) => {
      const lowerTitle = item.title.toLowerCase();

      if (this.props.store.search) {
        return lowerTitle.indexOf(this.props.store.search.toLowerCase()) !== -1;
      }

      return true;
    });

    limitedResults = limitedResults.filter((item, index) => {
      return index < 10;
    });

    return (
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          {limitedResults.map((item, index) => (
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
