import React from 'react'

import  burgerLog from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo =(props)=>(
       <div className={classes.Logo}>
           <img src={burgerLog} alt="burger-logo"/>
           
       </div>
);

export default logo;
