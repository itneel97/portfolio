import React from 'react';
import Aux from '../Auxiliary/Auxiliary';
import classes from './WithErrorHandler.module.css';
import {NavLink} from 'react-router-dom';


const withErrorHandler = (props) => {
    const attachedClasses = [classes.section__title, classes.section__titleServices];
    return (
        <Aux>
            <section className={classes.services__}>
                <h2 className={attachedClasses.join(" ")}>Page Not Found!!</h2>

                <NavLink exact className={classes.btn} activeClassName="active" to="/" >Home</NavLink>
                <br/>
                <p>well, Thanks!!!</p>
                
            </section>
        </Aux>
    );
}

export default withErrorHandler;
