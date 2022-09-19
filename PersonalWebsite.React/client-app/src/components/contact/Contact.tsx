import React, { Component } from 'react';
import ReactGA from 'react-ga4';
import './Contact.css';

class SocialLink {
    name: string = "";
    iconClass: string = "";
    url: string = "";
    newWindow: boolean = false;
}

export class Contact extends Component {
    clickSocialLink = (url: string, name:string, newWindow: boolean) => {
        window.open(url, newWindow ? '_blank' : 'self', 'noopener,noreferrer');
        ReactGA.send({ hitType: "pageview", page: `Social\\${name}`, title: `Social\\${name}` });
    };

    getLinks = (): SocialLink[] => {
        return [
            {
                name: "LinkedIn",
                iconClass: "fab fa-linkedin",
                url: "https://www.linkedin.com/in/michael-aj-kennedy/",
                newWindow: false
            }, {
                name: "GitHub",
                iconClass: "fab fa-github",
                url: "https://github.com/michael-aj-kennedy",
                newWindow: false
            }, {
                name: "Medium",
                iconClass: "fab fa-medium",
                url: "https://medium.com/@MikeKennedyDev",
                newWindow: false
            }, {
                name: "Dev.to",
                iconClass: "fab fa-dev",
                url: "https://dev.to/mikekennedydev",
                newWindow: false
            }, {
                name: "Email",
                iconClass: "fal fa-envelope",
                url: "mailto:email@mikekennedy.co.uk",
                newWindow: true
            }
        ];
    }

    render() {
        const links = this.getLinks();

        return (
            <div className="contact-container">
                {links.map((link) => {
                    return (
                        <span key={link.name}
                            className="contactLink emailIcon"
                            onClick={() => this.clickSocialLink(link.url, link.name, link.newWindow)}>
                            <span>
                                <span
                                    className={`socialLink ${link.iconClass}`}
                                    title={link.name}
                                    data-sociallink={link.name}
                                    data-target={link.url} />
                            </span>
                        </span>
                    );
                })}

            </div>
        );
    }
}