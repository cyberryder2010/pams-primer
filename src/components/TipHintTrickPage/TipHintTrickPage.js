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

class TipHintTrickPage extends Component {
  componentDidMount() {
    // load up all information from the server
    this.props.dispatch({
      type: "GET_ALL_THT",
    });
  }

  clickTipHintTrickDetails = (event, id) => {
    this.props.history.push(`reference/details/${id}`);
  };

  render() {
    const { classes } = this.props;

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tips Hints Tricks</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Description</TableCell>
              {/* <TableCell align="left">Date</TableCell> */}
              {/* <TableCell align="left">Author</TableCell>
              <TableCell align="left">Link</TableCell>
              <TableCell align="left">Password</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.store.tipHintTrick.map((item, index) => (
              <TableRow
                onClick={(event) =>
                  this.clickTipHintTrickDetails(event, item.id)
                }
                key={index}
              >
                <TableCell component="th" scope="item">
                  {item.name}
                </TableCell>
                <TableCell align="left">{item.type}</TableCell>
                <TableCell align="left">{item.text}</TableCell>
                {/* <TableCell align="left">{item.date}</TableCell> */}
                {/* <TableCell align="left">{item.author}</TableCell>
                <TableCell align="left">{item.link}</TableCell>
                <TableCell align="left">{item.password}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default withStyles(useStyles)(
  connect(mapStoreToProps)(TipHintTrickPage)
);
