import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Category } from './Category';
import { CategoryContent } from '../../interfaces/data/categoryContent';

export function CategoryRoute() {
    const { category } = useParams();
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

    let contents = articles && articles.data
        ? <Category categoryContent={articles.data} />
        : <em>No content found</em>

    return (
        <div>
            {contents}
        </div>
    );
}