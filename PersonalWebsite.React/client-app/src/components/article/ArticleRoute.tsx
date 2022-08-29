import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Article } from '../../interfaces/data/article';
import { ArticleContent } from './ArticleContent';

interface IProps {
    category: number;
    defaultArticleId: number;
}

export function ArticleRoute(props: IProps) {
    const { id } = useParams();
    const [article, setArticle] = useState<Article>();

    useEffect(() => {
        async function getArticle(articleId: string) {
            try {
                const response = await axios.get(
                    `/blog/article/${articleId}`
                );
                setArticle(response.data);
            } catch (e) {
                console.log(`Axios request failed! : ${e}`);
                return e;
            }
        }
        const targetArticleId = id ? id : props.defaultArticleId.toString();

        getArticle(targetArticleId)
    }, [id, props])

    return (
        <ArticleContent article={article} />
    );
}