import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

class ReferencePage extends Component {
  render() {
    return (
      <div>
        <p>Reference Page</p>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ReferencePage);
