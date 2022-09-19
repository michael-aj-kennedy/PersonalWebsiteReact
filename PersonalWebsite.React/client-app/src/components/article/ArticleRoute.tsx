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
                setDocumentTitle(response.data?.summary?.title ?? "");
                scrollToTop();

            } catch (e) {
                console.log(`Axios request failed! : ${e}`);
                return e;
            }
        }
        
        getArticle(id ?? "", props.defaultArticleId ?? "");
    }, [id, props.defaultArticleId])

    function setDocumentTitle(title: string) {
        if (title) {
            document.title = `Michael Kennedy - ${title}`;
        }
        else {
            document.title = `Michael Kennedy`;
        }
    }

    function scrollToTop() {
        var scroller = document.querySelector(".article-content .simplebar-content-wrapper");
        if (scroller != null) {
            scroller.scrollTo(0, 0);
        }
    }

    return (
        <ArticleContent article={article} />
    );
}