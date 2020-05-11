import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
// material-ui imports
import { withStyles, createStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LabelImportantRoundedIcon from "@material-ui/icons/LabelImportantRounded";
import LabelIcon from "@material-ui/icons/Label";

const drawerWidth = 240;

const useStyles = (theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginRight: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  });

class Nav2 extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Permanent drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>{this.props.children}</main>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="right"
        >
          <div className={classes.toolbar} />
          <Divider />
          <List>
            {[
              { text: "Notes", url: "/note" },
              { text: "Repo", url: "/reference" },
              { text: "Video", url: "/reference" },
              { text: "Image", url: "/reference" },
            ].map((text, index) => (
              <Link to={text.url} key={text.text}>
                <ListItem button>
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <LabelIcon />
                    ) : (
                      <LabelImportantRoundedIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text.text} />
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
          <List>
            {[
              { text: "Terms", url: "/glossary" },
              { text: "Tips", url: "/reference" },
              { text: "Hints", url: "/reference" },
              { text: "Tricks", url: "/reference" },
            ].map((text, index) => (
              <Link to={text.url} key={text.text}>
                <ListItem button>
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <LabelIcon />
                    ) : (
                      <LabelImportantRoundedIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text.text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(useStyles)(connect(mapStoreToProps)(Nav2));
