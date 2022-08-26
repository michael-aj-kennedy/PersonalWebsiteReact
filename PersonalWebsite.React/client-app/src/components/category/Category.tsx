import React, { Component } from 'react';
import { RouteProps } from 'react-router';
import { useParams } from "react-router-dom";
import { ArticleSummary } from '../../interfaces/data/articleSummary';
import { CategoryContent } from '../../interfaces/data/categoryContent';
import './Category.css';

export function Category() {
    const params = useParams();
    const searchCategoryName = params.category ?? "";
    const articles = getCategoryInfo(searchCategoryName);
    const articleId = params.article ?? 0;

    return (
        <div className="category-container">
            <div className="article-list">
                {searchCategoryName}
            </div>
            <article className="article">
                article
            </article>
        </div>
    );
}

/*
function getCategories(search: string) {
    fetch(`blog/articles/${search}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json() as Promise<CategoryContent>
        })
        .then(data => {
            this.setState({ categories: data, loading: false })
        });
}
*/

function getCategoryInfo(categoryName: string) : string {
    
    return categoryName ?? "";
}