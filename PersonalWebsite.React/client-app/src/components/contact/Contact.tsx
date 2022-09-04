import React, { Component } from 'react';
import './Contact.css';

interface IProps {
}

interface IState {
    links: SocialLink[];
}

class SocialLink {
    name: string = "";
    iconClass: string = "";
    url: string = "";
    newWindow: boolean = false;
}

export class Contact extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            links: [
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
            ]};
    }

    clickSocialLink = (url: string, newWindow: boolean) => {
        window.open(url, newWindow ? '_blank' : 'self', 'noopener,noreferrer');
    };

    render() {
        const links = this.state.links;

        return (
            <div className="contact-container hideMobile">
                {links.map((link) => {
                    return (
                        <span key={link.name}
                            className="contactLink emailIcon"
                            onClick={() => this.clickSocialLink(link.url, link.newWindow)}>
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