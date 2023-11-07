/* eslint-disable react/prop-types */
//import React, { useState } from 'react';
import auth from "../auth/auth-helper.js";
import React, { useState, useEffect } from "react";
//import { Redirect } from 'react-router-dom';
//import { read } from './someApiModule'; // Replace with the actual module that contains the read function
//import useState from 'react'
// import read from "react";
import match from "react";
import setUser from "react";
import setRedirectToSignin from "react";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import { read } from './api-user.js'
import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
//import Person from '@material-ui/core/Person'
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import unicornbikeImg from "./../assets/images/unicornbikeImg.jpg";
import Divider from "@material-ui/core/Divider";
import Edit from "react";
import DeleteUser from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

export default function Profile({ match }) {
    debugger
  const useStyles = makeStyles((theme) => ({
    card: {
      maxWidth: 600,
      margin: "auto",
      marginTop: theme.spacing(5),
    },
    title: {
      padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px 
${theme.spacing(2)}px`,
      color: theme.palette.openTitle,
    },
    media: {
      minHeight: 400,
    },
  }));
  const classes = useStyles();
  //...
  const [user, setUser] = useState({});
  const [redirectToSignin, setRedirectToSignin] = useState(false);
  //...
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const jwt = auth.isAuthenticated();
    debugger
    read(
      {
        userId: match.params.userId,
      },
      { t: jwt.token },
      signal
    ).then((data) => {
      if (data && data.error) {
        setRedirectToSignin(true);
      } else {
        setUser(data);
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, [match.params.userId]);

  if (setRedirectToSignin) {
    return <Navigate to="/signin" />;
  }

  return (
    <Paper className={classes.root} elevation={4}>
      <Typography variant="h6" className={classes.title}>
        Profile
      </Typography>
      <List dense>
        <ListItem>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText primary={user.name} secondary={user.email} />
          {auth.isAuthenticated().user &&
            auth.isAuthenticated().user._id == user._id && (
              <ListItemSecondaryAction>
                <Link to={"/user/edit/" + user._id}>
                  <IconButton aria-label="Edit" color="primary">
                    <Edit />
                  </IconButton>
                </Link>
                <DeleteUser userId={user._id} />
              </ListItemSecondaryAction>
            )}
        </ListItem>

        <Divider />
        <ListItem>
          <ListItemText
            primary={"Joined: " + new Date(user.created).toDateString()}
          />
        </ListItem>
      </List>
    </Paper>
  );
}
