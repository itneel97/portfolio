import React from 'react';
import '../../../App.module.css';
import classes from './Service.module.css';

const service = (props) => {
    return (
        <div className={classes.service}>
            {props.children}
        </div>

    );
};

export default service;