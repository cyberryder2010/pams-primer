import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

import { withStyles, createStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = (theme) =>
  createStyles({
    table: {
      minWidth: 650,
    },
  });

class VideoPage extends Component {
  componentDidMount() {
    // load up all information from the server
    this.props.dispatch({
      type: "GET_ALL_VIDEOS",
    });
  }

  clickVideoDetails = (event, id) => {
    this.props.history.push(`/details/${id}`);
  };

  render() {
    const { classes } = this.props;

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Videos</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Date</TableCell>
              {/* <TableCell align="right">Author</TableCell>
              <TableCell align="right">Link</TableCell>
              <TableCell align="right">Password</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.store.video.map((item, index) => (
              <TableRow
                onClick={(event) => this.clickVideoDetails(event, item.id)}
                key={index}
              >
                <TableCell component="th" scope="item">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.title}</TableCell>
                <TableCell align="right">{item.description}</TableCell>
                <TableCell align="right">{item.date}</TableCell>
                {/* <TableCell align="right">{item.author}</TableCell>
                <TableCell align="right">{item.link}</TableCell>
                <TableCell align="right">{item.password}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default withStyles(useStyles)(connect(mapStoreToProps)(VideoPage));
