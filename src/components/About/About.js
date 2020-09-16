import React from 'react';
import '../../App.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary'
import classes from './About.module.css';
import neelphoto from '../../assets/Images/devneel2.png';

const about = (props) => {
    let attachedClasses1, attachedClasses2 = [];
    attachedClasses1 = [classes.section__title, classes.section__titleAbout];
    attachedClasses2 = [classes.section__subtitle, classes.section__subtitleAbout]
    return (

        <Aux>
            <div className={classes.Main}>
                <section className={classes.aboutMe} >
                    <h2 className={attachedClasses1.join(" ")}>Who I am</h2>
                    <p className={attachedClasses2.join(" ")} >Designer and developer </p>

                    <div>
                        <p>The opportunity to contribute to the company and experience real-world design would be invaluable,
                        and I believe that my ability could be perfectly applied to this profile.
                Through SOMETHING came to my attention.</p>
                        <p>The opportunity to contribute to the company and experience real-world design would be invaluable,
                        and I believe that my ability could be perfectly applied to this profile.
                Through SOMETHING came to my attention.</p>
                    </div>
                    <img src={neelphoto} alt=" " className={classes.aboutMe__img} />
                </section>

            </div>

        </Aux>

    );
}

export default about;
