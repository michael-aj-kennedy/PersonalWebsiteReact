import React, { Component } from 'react';
import { CategoryContent } from '../../interfaces/data/categoryContent';
import { ArticleRoute } from '../article/ArticleRoute';
import { ArticleSummaryItem } from '../article/ArticleSummaryItem';
import './Category.css';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

interface IProps {
    categoryContent: CategoryContent;
    routeId: string;
    overrideArticleList: boolean;
}

interface IState {
    selectedArticleId: number;
}

export class Category extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { selectedArticleId: this.props.categoryContent.defaultArticleId };
    }

    articleChanged = (id: number) => {
        this.setState({ selectedArticleId: id });
        //this.props.articleChanged(this.props.categoryContent.categoryName, this.state.selectedArticleId);
    };

    render() {
        const categoryContent = this.props.categoryContent;
        const year = new Date().getFullYear();
        
        return (
            <div className="category-container">
                <SimpleBar className="article-list">
                    <ul>
                        {categoryContent?.articleSummaries.map((articleSummary, index) => {
                            const isFirst = index === 0;
                            const isLast = index === categoryContent.articleSummaries.length - 1;
                            const isSelected = isFirst && !this.props.routeId && !this.props.overrideArticleList;

                            return (
                                <ArticleSummaryItem
                                    key={index}
                                    categoryName={categoryContent.searchCategoryName}
                                    isSelected={isSelected}
                                    isFirst={isFirst}
                                    isLast={isLast}
                                    articleSummary={articleSummary}
                                    articleChanged={this.articleChanged}
                                />
                            );
                        })}
                    </ul>
                    <div className="copyright"><i className="fal fa-copyright"></i> Michael Kennedy {year}. All rights reserved.</div>
                </SimpleBar>
                <ArticleRoute category={categoryContent.categoryId} defaultArticleId={categoryContent?.defaultArticleId ?? 0} />
            </div>
        );
    }
}