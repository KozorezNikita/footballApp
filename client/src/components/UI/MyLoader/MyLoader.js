import React from "react";
import classes from "./MyLoader.module.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faFutbol } from "@fortawesome/free-solid-svg-icons";



const MyLoader = () => {
  return <div className={classes.loader}><span className={classes.myLoader}><FontAwesomeIcon icon={faFutbol} /></span><span className={classes.myLoader}><FontAwesomeIcon icon={faFutbol} /></span><span className={classes.myLoader}><FontAwesomeIcon icon={faFutbol} /></span></div>;
};

export default MyLoader;







/*
import React from "react";
import classes from "./MyLoader.module.css";


const MyLoader = () => {
  return <div className={classes.myLoader}></div>;
};

export default MyLoader;*/