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
                    <p className={attachedClasses2.join(" ")} >Developer and Designer</p>

                    <div>
                        <p>I’m naturally inquisitive and enjoy figuring out how things work.
                        I have a defined sense of aesthetic and enjoy making thoughtful,
                        engaging, and functional web applications that have a simple,
                            clean and distinct design.</p>
                        <p>I’ve built web applications using React and Node module
                        and have a strong foundation in web design and development.</p>
                        <p>When I'm not coding, I enjoy spending time with friends, play badminton and listen music.</p>
                    </div>
                    <img src={neelphoto} alt=" " className={classes.aboutMe__img} />
                </section>

            </div>

        </Aux>

    );
}

export default about;
