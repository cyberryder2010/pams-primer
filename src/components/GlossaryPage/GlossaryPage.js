import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

class GlossaryPage extends Component {
  render() {
    return (
      <div>
        <p>Glossary Page</p>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(GlossaryPage);
