import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

class ReferencePage extends Component {
  render() {
    return console.log("Return all of a type of Reference");
  }
}

export default connect(mapStoreToProps)(ReferencePage);
