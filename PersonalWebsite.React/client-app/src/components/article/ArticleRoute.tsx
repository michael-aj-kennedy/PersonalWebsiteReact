import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Article } from '../../interfaces/data/article';
import { ArticleContent } from './ArticleContent';

interface IProps {
    category: number;
    defaultArticleId: string;
}

export function ArticleRoute(props: IProps) {
    const { id } = useParams();
    const [article, setArticle] = useState<Article>();

    useEffect(() => {
        async function getArticle(articleId: string, defaultArticleId: string) {
            if (articleId === "" && defaultArticleId === "") {
                return;
            }

            let targetArticleId = articleId;
            if (!targetArticleId && props.defaultArticleId) {
                targetArticleId = props.defaultArticleId;
            }
            
            try {
                const response = await axios.get(
                    `/blog/article/${targetArticleId}`
                );

                setArticle(response.data);

                var title = response.data?.summary?.title ?? "";
                if (title) {
                    document.title = `Michael Kennedy - ${title}`;
                }
                else {
                    document.title = `Michael Kennedy`;
                }

            } catch (e) {
                console.log(`Axios request failed! : ${e}`);
                return e;
            }
        }
        
        getArticle(id ?? "", props.defaultArticleId ?? "");
    }, [id, props.defaultArticleId])

    return (
        <ArticleContent article={article} />
    );
}