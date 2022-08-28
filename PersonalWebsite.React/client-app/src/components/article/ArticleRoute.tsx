import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Article } from '../../interfaces/data/article';

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
        console.log("***");
        console.log(targetArticleId);
        getArticle(targetArticleId)
    }, [id, props])

    return (
        <article className="article">
            Category: {props.category}<br/>
            Id: {id}<br/>
            Default article id: {props.defaultArticleId}<br />
            Read id: {article?.summary.id}<br />
            <div dangerouslySetInnerHTML={{ __html: article?.content ?? "" }}></div>
        </article>
    );
}