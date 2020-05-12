import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

class HomePage extends Component {
  render() {
    return (
      <div>
        <p>This is My Home Page</p>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(HomePage);
