import React, { Component } from "react";
import { connect } from "react-redux";

// app components
import ReferenceList from "../ReferenceList/ReferenceList";
import ReferenceSearchField from "../ReferenceSearchField/ReferenceSearchField";

class HomePage extends Component {
  render() {
    return (
      <div>
        <ReferenceSearchField />

        <ReferenceList />
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    store,
  };
};

export default connect(mapStoreToProps)(HomePage);
