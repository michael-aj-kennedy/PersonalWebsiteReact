import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Category } from './Category';
import { CategoryContent } from '../../interfaces/data/categoryContent';
import './Category.css';

export function CategoryRoute() {
    const params = useParams();
    const { category, id } = params;
    const itemType = params['*'] || !category || category.toLowerCase() === "about" ? "view-article" : "view-list";
    const [articles, setArticles] = useState<{ name: string, data: CategoryContent }>();
    const currentCategory = articles?.name ?? ""

    useEffect(() => {
        // none of this is needed as we could just read the JSON directly, but I wanted to include usage of a REST API in this example code
        async function getArticleSummaries(categoryName: string) {
            if (!categoryName || categoryName.toLowerCase() !== currentCategory.toLowerCase()) {
                try {
                    const response = await axios.get(
                        `/blog/articles/${categoryName}`
                    );

                    setArticles({ name: categoryName, data: response.data });
                } catch (e) {
                    console.log(`Axios request failed! : ${e}`);
                    return e;
                }
            }
        }
        
        getArticleSummaries(category ?? "")
    }, [category, currentCategory])

    let hideArticleList = false;
    let overrideArticleList = false;

    if (articles != null && articles.data != null) {
        hideArticleList = articles.data.hideArticleList;
        overrideArticleList = articles.data.overrideArticleList;
    }

    return (
        <div className={`category-route-container ${itemType}`}>
            <Category hideArticleList={hideArticleList} categoryContent={articles?.data} routeId={id ?? ""} overrideArticleList={overrideArticleList} />
        </div>
    );
}