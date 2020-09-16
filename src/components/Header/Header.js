import React, { Component } from 'react';
import classes from './Header.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary'
import '../../App.module.css';
import {NavLink} from 'react-router-dom';


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
                            <div className={classes.devneel}>// dev neel</div>
                        </div>
                        <button className={classes.navToggle} onClick={this.toggleHandler} >
                            <span className={classes.hamburger}></span>
                        </button>
                        <nav className={classes.nav}>
                            <ul className={classes.nav__list}>
                                <li className={classes.nav__item} onClick={this.toggleHandler} >
                                    <NavLink exact className={classes.nav__link} activeClassName="active" to="/" >Home</NavLink>
                                </li>
                                <li className={classes.nav__item} onClick={this.toggleHandler} >
                                    <NavLink exact className={classes.nav__link} activeClassName="active" to="/Services" >My service</NavLink>
                                </li>
                                <li className={classes.nav__item} onClick={this.toggleHandler} >
                                    <NavLink exact className={classes.nav__link} activeClassName="active" to="/About" >About me</NavLink>
                                </li>
                                <li className={classes.nav__item} onClick={this.toggleHandler} >
                                    <NavLink exact className={classes.nav__link} activeClassName="active" to="/Work" >My Work</NavLink>
                                </li>
                                <li className={classes.nav__item} onClick={this.toggleHandler} >
                                    <NavLink exact className={classes.nav__link} activeClassName="active" to="/Resume" >My Resume</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                    
               
            </Aux>

        );
    }

}

export default Header;