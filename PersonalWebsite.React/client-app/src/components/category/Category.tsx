import React, { Component, ComponentType } from 'react';
import { ArticleSummary } from '../../interfaces/data/articleSummary';
import { CategoryContent } from '../../interfaces/data/categoryContent';
import { ArticleRoute } from '../article/ArticleRoute';
import { ArticleSummaryItem } from '../article/ArticleSummaryItem';
import './Category.css';


interface IProps {
    categoryContent: CategoryContent
}

export function Category(props: IProps) {
    const categoryContent = props.categoryContent;

    return (
        <div className="category-container">
            <ul className="article-list">
                {categoryContent?.articleSummaries.map((articleSummary, index) => {
                    const isFirst = index === 0;
                    const isLast = index === categoryContent.articleSummaries.length - 1;
                    const isSelected = articleSummary.id === (categoryContent?.defaultArticleId ?? 0);

                    return (
                        <ArticleSummaryItem key={index} categoryName={categoryContent.searchCategoryName} isSelected={isSelected} isFirst={isFirst} isLast={isLast} articleSummary={articleSummary} />
                    );
                })}
            </ul>
            <ArticleRoute defaultArticleId={categoryContent?.defaultArticleId ?? 0} />
        </div>
    );
}