import React from 'react';
import { CategoryContent } from '../../interfaces/data/categoryContent';
import { ArticleRoute } from '../article/ArticleRoute';
import { ArticleSummaryItem } from '../article/ArticleSummaryItem';
import './Category.css';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

interface IProps {
    categoryContent: CategoryContent
}

export function Category(props: IProps) {
    const categoryContent = props.categoryContent;
    const year = new Date().getFullYear();

    return (
        <div className="category-container">
            <SimpleBar className="article-list">
                <ul>
                    {categoryContent?.articleSummaries.map((articleSummary, index) => {
                        const isFirst = index === 0;
                        const isLast = index === categoryContent.articleSummaries.length - 1;
                        const isSelected = articleSummary.id === (categoryContent?.defaultArticleId ?? 0);

                        return (
                            <ArticleSummaryItem key={index} categoryName={categoryContent.searchCategoryName} isSelected={isSelected} isFirst={isFirst} isLast={isLast} articleSummary={articleSummary} />
                        );
                    })}
                </ul>
                <div className="copyright"><i className="fal fa-copyright"></i> Michael Kennedy {year}. All rights reserved.</div>
            </SimpleBar>
            <ArticleRoute category={categoryContent.categoryId} defaultArticleId={categoryContent?.defaultArticleId ?? 0} />
        </div>
    );
}