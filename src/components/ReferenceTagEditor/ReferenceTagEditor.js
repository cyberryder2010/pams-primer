import React, { Component } from "react";
import { connect } from "react-redux";
import ReferenceTagItem from "../ReferenceTagItem/ReferenceTagItem";

// material-ui custom styling dependencies
import { withStyles, createStyles } from "@material-ui/core/styles";
// material-ui components
import {
  Paper,
  IconButton,
  Modal,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { AddCircle } from "@material-ui/icons";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const customStyles = (theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
    pillList: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0, 0.5, 0.5, 0),
      },
      margin: 0,
      padding: theme.spacing(0, 0, 1, 0),
      listStyle: "none",
    },
    modalContent: {
      width: "350px",
      height: "200px",
      top: `50%`,
      left: "50%",
      transform: "translate(-50%, -50%)",
      position: "fixed",
      padding: theme.spacing(2, 3, 3),
    },
    formControl: {
      minWidth: 120,
    },
  });

class ReferenceTagEditor extends Component {
  state = {
    selectedTagId: 0,
    isAddTagModalOpen: false,
    isMessageOpen: false,
  };

  componentDidMount() {
    // API call to load available Tag
    // dispatching saga
    this.props.dispatch({
      type: "GET_TAG",
    });
  }

  changeSelectedTag = (event) => {
    this.setState({
      selectedTagId: event.target.value,
    });
  };

  clickAddTag = (event) => {
    if (this.state.selectedTagId === "" || this.state.selectedTagId === 0) {
      this.openMessage();
      return;
    }

    this.props.dispatch({
      type: "POST_REFERENCE_TAG",
      payload: {
        References_id: this.props.referenceId,
        Tag_id: this.state.selectedTagId,
      },
    });

    this.closeAddTagModal();
  };

  // updating local state to close modal
  closeAddTagModal = () => {
    this.setState({
      isAddTagModalOpen: false,
    });
  };

  // updating local state to open modal
  openAddTagModal = () => {
    this.setState({
      isAddTagModalOpen: true,
    });
  };

  // open message alert
  openMessage = () => {
    this.setState({
      isMessageOpen: true,
    });
  };

  // close message alert
  closeMessage = () => {
    this.setState({
      isMessageOpen: false,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper component="div" variant="outlined" className={classes.root}>
          <Typography variant="subtitle1" component="h4">
            Tag:
          </Typography>

          <ul className={classes.pillList}>
            {this.props.store.referenceTag.map((item, index) => (
              <ReferenceTagItem key={index} item={item} />
            ))}
            <li>
              <IconButton onClick={this.openAddTagModal}>
                <AddCircle />
              </IconButton>
            </li>
          </ul>
        </Paper>

        <Modal
          open={this.state.isAddTagModalOpen}
          onClose={this.closeAddTagModal}
        >
          <Paper className={classes.modalContent}>
            <Typography component="h3" variant="h6" gutterBottom>
              Pick a New Tag to Add
            </Typography>

            <Box mb={3}>
              <FormControl
                variant="outlined"
                className={classes.formControl}
                fullWidth
              >
                <InputLabel id="TagSelection">Tag:</InputLabel>
                <Select
                  labelId="TagSelection"
                  id="TagSelection"
                  onChange={this.changeSelectedTag}
                  label="Tag:"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {this.props.store.tag.map((item, index) => (
                    <MenuItem key={index} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Button
              onClick={this.clickAddTag}
              variant="contained"
              color="primary"
              fullWidth
            >
              Save
            </Button>
          </Paper>
        </Modal>

        <Snackbar
          open={this.state.isMessageOpen}
          autoHideDuration={6000}
          onClose={this.closeMessage}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Alert onClose={this.closeMessage} severity="error">
            You must select a Tag to add it.
          </Alert>
        </Snackbar>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({ store });
export default withStyles(customStyles)(
  connect(mapStateToProps)(ReferenceTagEditor)
);
