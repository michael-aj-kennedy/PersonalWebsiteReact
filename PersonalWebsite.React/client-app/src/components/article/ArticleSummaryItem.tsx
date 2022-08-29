import React, { Component } from 'react';
import { ArticleSummary } from '../../interfaces/data/articleSummary';
import './ArticleSummaryItem.css';
import { Link } from "react-router-dom";
import moment from 'moment';


interface IProps {
    articleSummary: ArticleSummary;
    categoryName: string;
    isFirst: boolean;
    isLast: boolean;
    isSelected: boolean;
}

interface IState {
    //loading: boolean;
}

export class ArticleSummaryItem extends Component<IProps, IState> {

    static renderArticleSummary(articleSummary: ArticleSummary) {
        const pinnedIcon = articleSummary.pinned
            ? <i className="pinned-article fal fa-thumbtack"></i>
            : null;

        const viewIcon = articleSummary.url
            ? "fal fa-external-link"
            : "fal fa-chevron-double-right";

        const formattedDate = articleSummary.date
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
        const selected = this.props.isSelected ? "selected" : "";
        const articleSummary = this.props.articleSummary;
        const renderedSummary = ArticleSummaryItem.renderArticleSummary(articleSummary);
        const articleIdentifier = articleSummary.title.toLowerCase().replaceAll(" ", "-");
        const summary = articleSummary.url
            ? <a href={articleSummary.url} target="_blank" rel="noreferrer">{renderedSummary}</a>
            : <Link to={`/${this.props.categoryName}/${articleIdentifier}`}>{renderedSummary}</Link>;

        return (
            <li className={`article-summary-entry ${selected} ${this.props.isFirst ? "first" : ""} ${this.props.isLast ? "last" : ""}`}>
                {summary}
            </li>
        );
    }
}