import React from 'react';
import classes from './Home.module.css';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import neelPhoto from '../../assets/Images/devneel1.png';
import '../../App.module.css';


const home = (props) => {
    let attachedClasses1 = [classes.section__title, classes.section__titleIntro]
    let attachedClasses2 = [classes.section__subtitle, classes.section__subtitleIntro]
    return (


        <Aux>
            <div className={classes.Main}>
                <section className={classes.intro} >
                    <h1 className={attachedClasses1.join(" ")} >
                        Hi, I am <strong> Neel Patel</strong>
                    </h1>
                    <p className={attachedClasses2.join(" ")}  > FRONT-END DEV</p>
                    <img src={neelPhoto} className={classes.intro__img} alt=" " />
                </section>

            </div>

        </Aux>

    );
}

export default home;