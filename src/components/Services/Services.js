import React from 'react';
import '../../App.module.css';
import Service from './Service/Service';
import classes from './Services.module.css';
import { NavLink } from 'react-router-dom';


const services = (props) => {
    const attachedClasses = [classes.section__title, classes.section__titleServices];
    return (
        <div className={classes.Main} >
            <section className={classes.services__}>
                <h2 className={attachedClasses.join(" ")}>What I do</h2>
                <div className={classes.services}>
                    <Service>
                        <h3>UI/UX DESIGN</h3>
                        <p>
                            UI/UX involves planning and iterating a site's structure and layout. Once the proper information architecture is in place,
                         I love to design the visual layer to create a beautiful user experience.</p>
                    </Service>
                    <Service>
                        <h3>FRONT END </h3>
                        <p>Front End Development is building out the visual components of a website. Using HTML, CSS , and Javascript, I build fast, interactive websites.
                        This also may include API's or other integrations.</p>
                    </Service>
                </div>

                <NavLink exact className={classes.btn} activeClassName="active" to="/Work" >My Work</NavLink>

            </section>
        </div>



    );
};

export default services;