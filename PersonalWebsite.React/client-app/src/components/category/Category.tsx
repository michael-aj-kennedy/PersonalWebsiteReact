import React, { Component, ComponentType } from 'react';
import { ArticleSummary } from '../../interfaces/data/articleSummary';
import { CategoryContent } from '../../interfaces/data/categoryContent';
import './Category.css';
import { NavigateFunction, Params, useNavigate, useParams } from "react-router-dom";
import { CategoryRoute } from './CategoryRoute';


interface IProps {
    categoryContent: CategoryContent
}

interface IState {
    //loading: boolean;
}

export class Category extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        /*this.state = {
            loading: false
        };*/
    }

    componentDidMount() {
        //this.getArticleSummaries(this.props.categoryName);
    }

    static renderArticleSummaries(categoryContent: CategoryContent | null) {
        return (
            <div className="category-container">
                <div className="article-list">
                    {categoryContent?.categoryName ?? ""}
                </div>
                <article className="article">
                    {categoryContent?.defaultArticleId}
                </article>
            </div>
        );
    }

    render() {
        return (
            <div>
                {Category.renderArticleSummaries(this.props.categoryContent)}
            </div>            
        );
    }
}