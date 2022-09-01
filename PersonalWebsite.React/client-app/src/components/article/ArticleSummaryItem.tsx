import React, { Component } from 'react';
import { ArticleSummary } from '../../interfaces/data/articleSummary';
import './ArticleSummaryItem.css';
import { Link, NavLink } from "react-router-dom";
import moment from 'moment';


interface IProps {
    articleSummary: ArticleSummary;
    categoryName: string;
    isFirst: boolean;
    isLast: boolean;
    isSelected: boolean;
}

interface IState {
    selected: boolean;
}

export class ArticleSummaryItem extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { selected: props.isSelected };
    }

    static renderArticleSummary(articleSummary: ArticleSummary, dummyEntry: boolean) {
        const pinnedIcon = articleSummary.pinned
            ? <i className="pinned-article fal fa-thumbtack"></i>
            : null;

        let viewIcon = "";
        if (!dummyEntry) {
            viewIcon = articleSummary.url
                ? "fal fa-external-link"
                : "fal fa-chevron-double-right";
        }
        
        const formattedDate = articleSummary.date && new Date(articleSummary.date).getFullYear() > 2000
            ? `Posted ${moment(articleSummary.date).format("Do MMM YYYY")}`
            : null;

        return (
            <div className="text-dark">
                <div className="article-summary-header">
                    {pinnedIcon}
                    <div className="article-summary-title">
                        <span className="title">{articleSummary.title}</span>
                        <span className="posted">{formattedDate}</span>
                    </div>
                </div>
                <div className="article-summary-description" dangerouslySetInnerHTML={{ __html: articleSummary.summary ?? "" }}></div>
                <div className="article-summary-footer">
                    <i className={viewIcon}></i>
                </div>
            </div>
        );
    }

    render() {
        const articleSummary = this.props.articleSummary;
        const dummyEntry = articleSummary.id === 0;
        const renderedSummary = ArticleSummaryItem.renderArticleSummary(articleSummary, dummyEntry);
        const articleIdentifier = articleSummary.title.toLowerCase().replaceAll(" ", "-");
        const summary = articleSummary.url
            ? <a href={articleSummary.url} target="_blank" rel="noreferrer">{renderedSummary}</a>
            : <NavLink className={({ isActive }) => isActive || this.props.isSelected ? "selected" : ""} to={`/${this.props.categoryName}/${articleIdentifier}`}>{renderedSummary}</NavLink>;

        return (
            <li className={`article-summary-entry ${this.props.isFirst ? "first" : ""} ${this.props.isLast ? "last" : ""} ${dummyEntry ? "dummy" : ""}`}>
                {summary}
            </li>
        );
    }
}