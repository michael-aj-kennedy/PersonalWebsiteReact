import React from 'react';
import { Article } from '../../interfaces/data/article';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

interface IProps {
    article: Article | undefined;
}

export function ArticleContent(props: IProps) {
    const headerImagePath = props.article?.summary.headerImage ?? "";
    
    const articleImg = headerImagePath
        ? <img className="article-header-image" alt={props.article?.summary.title} src={`/${headerImagePath}`} />
        : null;
    
    return (
        <article className="article">
            <div className="article-container border-full border-light">
                <div className="article-container border-full border-dark">
                    <div className="article-content">
                        <div className="article-header">
                            <h2 className="article-header-text">{props.article?.summary.title}</h2>
                        </div>
                        <SimpleBar className="article-content-text">
                            <div className="article-content-text-container">
                                {articleImg}
                                <div dangerouslySetInnerHTML={{ __html: props.article?.content ?? "" }}></div>
                            </div>
                        </SimpleBar>
                    </div>
                </div>
            </div>
        </article>
    );
}