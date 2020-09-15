import React, { Component } from 'react';
import classes from './Header.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary'
import '../../App.module.css';

class Header extends Component {
     state = {
        navOpen: false,
    }
 
    toggleHandler = () => {
        this.setState((prevState) => {
            return { navOpen: !prevState.navOpen };
        });
        console.log(this.state.navOpen);
    }

    render() {
        
        return (

            <Aux>
                <div className={ classes.Main} >
                    <div className={this.state.navOpen ? classes.navopen: classes.header}>
                        <div className={classes.logo}>
                            <div className={classes.devneel}> // dev neel</div>
                        </div>
                        <button className={classes.navToggle} onClick={this.toggleHandler} >
                            <span className={classes.hamburger}></span>
                        </button>
                        <nav className={classes.nav}>
                            <ul className={classes.nav__list}>
                                <li className={classes.nav__item} onClick={this.toggleHandler} ><a href="#None" className={classes.nav__link}>Home</a></li>
                                <li className={classes.nav__item} onClick={this.toggleHandler} ><a href="#services" className={classes.nav__link}>My service</a></li>
                                <li className={classes.nav__item} onClick={this.toggleHandler} ><a href="#about" className={classes.nav__link}>About me</a></li>
                                <li className={classes.nav__item} onClick={this.toggleHandler} ><a href="#work" className={classes.nav__link}>My Work</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                    
               
            </Aux>

        );
    }

}

export default Header;