import React, { Component } from "react";
import { connect } from "react-redux";

class AddVideo extends Component {
  state = {
    newVideo: {
      link: "",
      password: "",
      author: "",
      date: 0,
    },
  };

  changeNewVideo = (fieldKey) => (event) => {
    this.setState({
      [fieldKey]: event.target.value,
    });
  };

  saveNewVideo = (event) => {
    this.props.dispatch({
      type: "POST_VIDEO",
      payload: {
        name: this.state.newVideo,
      },
    });

    // clear form field
    this.setState({
      newVideo: "",
    });
  };

  render() {
    return (
      <div>
        <h3>Add Video</h3>
        <input
          placeholder="Video Link"
          type="text"
          value={this.state.newVideo}
          onChange={this.changeNewVideo("link")}
        />
        <button onClick={this.saveNewVideo}>Save</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AddVideo);
