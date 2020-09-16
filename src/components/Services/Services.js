import React from 'react';
import '../../App.module.css';
import Service from './Service/Service';
import classes from './Services.module.css';

const services = (props) => {
    const attachedClasses = [classes.section__title, classes.section__titleServices];
    return (
        <div className={classes.Main} >
            <section className={classes.services__}>
                <h2 className={attachedClasses.join(" ")}>What I do</h2>
                <div className={classes.services}>
                    <Service>
                        <h3>Web development</h3>
                        <p>The opportunity to contribute to the company and experience real-world design would be invaluable,
                        and I believe that my ability could be perfectly applied to this profile.
                    Through SOMETHING came to my attention. </p>
                    </Service>
                    <Service>
                        <h3>Web development</h3>
                        <p>The opportunity to contribute to the company and experience real-world design would be invaluable,
                        and I believe that my ability could be perfectly applied to this profile.
                    Through SOMETHING came to my attention. </p>
                    </Service>
                    <Service>
                        <h3>Web development</h3>
                        <p>The opportunity to contribute to the company and experience real-world design would be invaluable,
                        and I believe that my ability could be perfectly applied to this profile.
                    Through SOMETHING came to my attention. </p>
                    </Service>

                </div>
                <a href=" " className={classes.btn}>My Work</a>
            </section>
        </div>



    );
};

export default services;