import React, { Component } from "react";
import { connect } from "react-redux";

// material-ui components
import { Chip } from "@material-ui/core";

class ReferenceTagItem extends Component {
  clickDeleteTag = (event) => {
    // dispatch to a saga for deleting Tag from database
    this.props.dispatch({
      type: "DELETE_REFERENCE_TAG",
      payload: {
        referenceTagId: this.props.item.id,
        referenceId: this.props.item.reference_id,
      },
    });
  };

  render() {
    const { item } = this.props;
    return (
      <li>
        <Chip
          label={item.name}
          variant="outlined"
          color="primary"
          onDelete={this.clickDeleteTag}
        />
      </li>
    );
  }
}

const mapStateToProps = (store) => ({ store });
export default connect(mapStateToProps)(ReferenceTagItem);
