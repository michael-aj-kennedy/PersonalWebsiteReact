import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Category } from './Category';
import { CategoryContent } from '../../interfaces/data/categoryContent';
import './Category.css';

export function CategoryRoute() {
    const { category, id } = useParams();
    const [articles, setArticles] = useState<{ name: string, data: CategoryContent }>();
    
    useEffect(() => {
        // none of this is needed as we could just read the JSON directly, but I wanted to include usage of a REST API in this example code
        async function getArticleSummaries(categoryName: string) {
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
        
        getArticleSummaries(category ?? "")
    }, [category])

    const hasArticleData = articles && articles.data; // && category === articles.name;

    let contents = hasArticleData
        ? <Category categoryContent={articles.data} routeId={id ?? ""} overrideArticleList={articles?.data?.overrideArticleList} />
        : <em>Loading</em>


    return (
        <div className="category-route-container">
            <Category categoryContent={articles?.data} routeId={id ?? ""} overrideArticleList={articles?.data?.overrideArticleList ?? false} />
        </div>
    );
}