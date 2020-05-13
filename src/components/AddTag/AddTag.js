import React, { Component } from "react";
import { connect } from "react-redux";

class AddTag extends Component {
  state = {
    newTag: "",
  };

  changeNewTag = (event) => {
    this.setState({
      newTag: event.target.value,
    });
  };

  saveNewTag = (event) => {
    this.props.dispatch({
      type: "POST_TAG",
      payload: {
        name: this.state.newTag,
      },
    });

    // clear form field
    this.setState({
      newTag: "",
    });
  };

  render() {
    return (
      <div>
        <h3>Add Tag</h3>
        <input
          placeholder="Name of Tag"
          type="text"
          value={this.state.newTag}
          onChange={this.changeNewTag}
        />
        <button onClick={this.saveNewTag}>Save</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AddTag);
