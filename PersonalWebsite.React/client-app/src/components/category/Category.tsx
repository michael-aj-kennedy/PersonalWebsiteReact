import React, { Component } from 'react';
import { CategoryContent } from '../../interfaces/data/categoryContent';
import { ArticleRoute } from '../article/ArticleRoute';
import { ArticleSummaryItem } from '../article/ArticleSummaryItem';
import { Routes, Route } from "react-router-dom"
import './Category.css';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { ArticleSummary } from '../../interfaces/data/articleSummary';

interface IProps {
    categoryContent: CategoryContent | undefined;
    routeId: string;
    overrideArticleList: boolean;
}

interface IState {
    selectedArticleId: string;
}

const dummyArticleSummary: ArticleSummary = {
    id: 0,
    name: "",
    headerImage: "",
    articleDataFile: "",
    pinned: false,
    summary: "",
    title: "",
    url: "",
    date: undefined
};

export class Category extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { selectedArticleId: this.props?.categoryContent?.defaultArticleId ?? "" };
    }

    render() {
        const categoryContent = this.props.categoryContent;
        const year = new Date().getFullYear();
        let articles: ArticleSummary[] = [];

        if (categoryContent?.articleSummaries) {
            articles = categoryContent?.articleSummaries;
        }
        else {
            for (let i = 0; i < 10; i++) {
                articles.push(dummyArticleSummary);
            }
        }

        return (
            <div className="category-container">
                <SimpleBar className="article-list">
                    <ul>
                        {articles.map((articleSummary, index) => {
                            const isFirst = index === 0;
                            const isLast = index === articles.length - 1;
                            const isSelected = isFirst && !this.props.routeId && !this.props.overrideArticleList;

                            return (
                                <ArticleSummaryItem
                                    key={index}
                                    categoryName={categoryContent?.searchCategoryName ?? ""}
                                    isSelected={isSelected}
                                    isFirst={isFirst}
                                    isLast={isLast}
                                    articleSummary={articleSummary}
                                />
                            );
                        })}
                    </ul>
                    <div className="copyright"><i className="fal fa-copyright"></i> Michael Kennedy {year}. All rights reserved.</div>
                </SimpleBar>
                <Routes>
                    <Route path="/" key={categoryContent?.defaultArticleId ?? ""} element={<ArticleRoute category={categoryContent?.categoryId ?? 0} defaultArticleId={categoryContent?.defaultArticleId ?? ""} />} />
                    <Route path="/:id" key="article" element={<ArticleRoute category={categoryContent?.categoryId ?? 0} defaultArticleId={""} />} />
                </Routes>      
            </div>
        );
    }
}