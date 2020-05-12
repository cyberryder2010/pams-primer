import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

class NotesPage extends Component {
  render() {
    return (
      <div>
        <p>Notes Page</p>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NotesPage);
