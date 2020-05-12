import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

class AddEditPage extends Component {
  render() {
    return (
      <div>
        <p>Add Edit Page</p>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AddEditPage);
