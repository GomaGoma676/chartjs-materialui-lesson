import React from "react";
import {
  Button,
  makeStyles,
  Typography,
  Grid,
  Paper,
  Divider,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";

import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
const useStyles = makeStyles({
  root: {
    background: "green",
    color: "white",
    height: 50,
    padding: "3px 50px",
  },
  typoStyle: {
    color: "blue",
  },
  paper: {
    background: "orange",
    height: "50px",
  },

  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 4,
    paddingBottom: 4,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

const DryRun = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        className={classes.typoStyle}
        variant="h1"
        align="center"
        color="secondary"
        noWrap
        gutterBottom
      >
        Hello UI Hello UI Hello UI Hello UI Hello UI Hello UI Hello UI
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
      <Button className={classes.root} variant="contained" color="secondary">
        Test Button
      </Button>

      <Grid
        container
        spacing={1}
        direction="column"
        justify="center"
        alignItems="flex-start"
      >
        <Grid item xs={1}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3} direction="column">
        <Grid item xs={12} container>
          <Grid item xs={2}>
            Welcome
          </Grid>
          <Grid item xs={8} />
          <Grid item xs={2}>
            Logout
          </Grid>
        </Grid>
        {/* <Grid item xs={12}>
          <Divider />
        </Grid> */}
        <Grid item xs={12} container spacing={1} justify="space-around">
          <Grid item xs={3}>
            Resources JSONPlaceholder comes with a set of 6 common resources:
            /posts 100 posts /comments 500 comments /albums 100 albums /photos
            5000 photos /todos 200 todos /users 10 users Note: resources have
            relations. For example: posts have many comments, albums have many
            photos, ... see below for routes examples.
          </Grid>
          <Grid item xs={3}>
            Resources JSONPlaceholder comes with a set of 6 common resources:
            /posts 100 posts /comments 500 comments /albums 100 albums /photos
            5000 photos /todos 200 todos /users 10 users Note: resources have
            relations. For example: posts have many comments, albums have many
            photos, ... see below for routes examples.
          </Grid>
          <Grid item xs={3}>
            Resources JSONPlaceholder comes with a set of 6 common resources:
            /posts 100 posts /comments 500 comments /albums 100 albums /photos
            5000 photos /todos 200 todos /users 10 users Note: resources have
            relations. For example: posts have many comments, albums have many
            photos, ... see below for routes examples.
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default DryRun;
