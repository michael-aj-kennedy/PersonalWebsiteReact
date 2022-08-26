import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom"
import './Header.css';
import profile from './../../images/mk2.jpg'

export class Header extends Component {
    render() {
        const yearsExperience = new Date().getFullYear() - 2006

        return (
            <header className="mk-header">
                <div className="container">
                    <div className="thumbnail hideMobile">
                        <Link to="/">
                            <div className="thumbnail-outer-border border-circular border-light">
                                <img src={profile} />
                            </div>
                        </Link>
                    </div>
                    <div className="mk-title">
                        <Link to="/">
                            <div className="mk-title-container">
                                <h1 className="mk-name">
                                    Michael Kennedy
                                </h1>
                                <h2 className="mk-degree hideMobile">
                                    Bsc (hons)
                                </h2>
                            </div>
                        </Link>
                    </div>
                    <div className="mk-overview">
                        Senior full-stack software developer with {yearsExperience} years industry experience
                    </div>
                </div>
            </header>
        );
    }
}
