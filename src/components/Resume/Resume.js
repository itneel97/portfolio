import React from 'react';
import classes from './Resume.module.css';
import resumepdf from '../../assets/docs/cv_neel.pdf';

// import neelPhoto from '../../assets/Images/devneel1.png';

const resume = (props) => {
    const attachedClasses = [classes.section__title, classes.section__titleServices];
    return (
        <section className={classes.services__}>
            <h2 className={attachedClasses.join(" ")}>What I've got!</h2>

            <a className={classes.btn} target = "_blank" rel = "noopener noreferrer" href={resumepdf} >GO</a>
        </section>
    );
}

export default resume;