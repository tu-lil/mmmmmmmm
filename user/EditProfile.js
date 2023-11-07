import auth from "./auth/auth-helper.js";
import React, { useState, useEffect } from "react";
import clickSubmit from "react";
//import { read } from './someApiModule'; // Replace with the actual module that contains the read function
//import useState from 'react'
import read from "react";
import match from "react";
import setValues from "react";
import setRedirectToSignin from "react";
const clickSubmit = () => {
  const jwt = auth.isAuthenticated();
  const user = {
    name: values.name || undefined,
    email: values.email || undefined,
    password: values.password || undefined,
  };
  update(
    {
      userId: match.params.userId,
    },
    {
      t: jwt.token,
    },
    user
  ).then((data) => {
    if (data && data.error) {
      setValues({ ...values, error: data.error });
    } else {
      setValues({ ...values, userId: data._id, redirectToProfile: true });
    }
  });
};
if (values.redirectToProfile) {
  return <Redirect to={"/user/" + values.userId} />;
}
