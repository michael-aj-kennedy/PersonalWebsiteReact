import React, { Component } from 'react';
import './Header.css';
import profile from './../../images/mk2.jpg'

export class Header extends Component {
    render() {
        const yearsExperience = new Date().getFullYear() - 2006

        return (
            <header className="mk-header">
                <div className="container">
                    <div className="thumbnail hideMobile">
                        <a href="https://www.mikekennedy.co.uk" target="_blank" rel="noreferrer">
                            <div className="thumbnail-outer-border border-circular border-light">
                                <div className="thumbnail-inner-border border-circular border-dark">
                                    <img src={profile} />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="mk-title">
                        <a href="https://www.mikekennedy.co.uk" target="_blank" rel="noreferrer">
                            <div className="mk-title-container">
                                <h1 className="mk-name">
                                    Michael Kennedy
                                </h1>
                                <h2 className="mk-degree hideMobile">
                                    Bsc (hons)
                                </h2>
                            </div>
                        </a>
                    </div>
                    <div className="mk-overview">
                        Senior full-stack software developer with {yearsExperience} years industry experience
                    </div>
                </div>
            </header>
        );
    }
}
