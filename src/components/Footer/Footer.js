import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import classes from './Footer.module.css';

import Aux from '../../hoc/Auxiliary/Auxiliary'
import '../../App.module.css';

class Footer extends Component {
    render() {
        return (
            <Aux>
                <div className={classes.Main} >
                    <div className={classes.footer}>
                        <a href="mailto:it.neel97@yahoo.com" className={classes.footer__link} >it.neel97@yahoo.com</a>
                        <ul className={classes.socialList} >
                            <li classNames={classes.socialList__item} >
                                <a className={classes.socialList__link} href="https://github.com/itneel97">
                                    <FontAwesomeIcon icon={faGithub} size="lg" />
                                </a>
                            </li>
                            <li classNames={classes.socialList__item}>
                                <a className={classes.socialList__link} href="https://www.linkedin.com/in/neel-patel-671ab8186">
                                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                                </a>
                            </li>
                        </ul>
                        <h3>built with react </h3>
                    </div>

                </div>


            </Aux>

        );
    }
}

export default Footer;