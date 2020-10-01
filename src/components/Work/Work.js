import React from 'react';
import classes from './Work.module.css';
import img1 from '../../assets/Images/portfolio1.png';
import img2 from '../../assets/Images/portfolio2.png';

const work = (props) => {
    const attachedClasses1 = [classes.section__title, classes.section__titleWork];
    const attachedClasses2 = [classes.section__subtitle, classes.section__subtitleWork];
    const link1 = "https://neel-patel-burger.netlify.app";
    return(
        <section className={classes.myWork} >
        <h2 className={attachedClasses1.join(' ')}>My work</h2>
        <p className={attachedClasses2.join(' ')}>A selection of my range of work!</p>

        <div className={classes.portfolio}>
            <a href={link1} target = "_blank" rel = "noopener noreferrer" className={classes.portfolio__item}>
                <img src={img1} alt="" className={classes.portfolio__img} />
            </a>
            <a href="  " target = "_blank" rel = "noopener noreferrer" className={classes.portfolio__item}>
                <img src={img2} alt="" className={classes.portfolio__img} />
            </a>           
        </div>
    </section>
    );
}

export default work;