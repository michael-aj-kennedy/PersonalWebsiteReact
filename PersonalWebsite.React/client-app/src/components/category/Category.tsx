import React, { Component, ComponentType } from 'react';
import { useParams } from "react-router-dom";
import { ArticleSummary } from '../../interfaces/data/articleSummary';
import { CategoryContent } from '../../interfaces/data/categoryContent';
import './Category.css';

interface IProps {
    categoryName: string
}

interface IState {
    categoryContent: CategoryContent | null;
    loading: boolean;
}

export class Category extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { categoryContent: null, loading: true };
    }

    componentDidMount() {
        this.getArticleSummaries(this.props.categoryName);
    }

    static renderArticleSummaries(categoryContent: CategoryContent | null) {
        return (
            <div className="category-container">
                <div className="article-list">
                    {categoryContent?.categoryName ?? ""}
                </div>
                <article className="article">
                    {categoryContent?.defaultArticleId}
                </article>
            </div>
            //<nav>
            //    <ul className="nav-items">
            //        {categories.map((category, index) => {
            //            const isFirst = index === 0;
            //            const isLast = index === categories.length - 1;

            //            return (
            //                <li className={`nav-item ${isFirst ? "first" : ""} ${isLast ? "last" : ""}`} key={category.id}>
            //                    <a>{category.name}</a>
            //                </li>
            //            );

            //        })}
            //    </ul>
            //</nav>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Category.renderArticleSummaries(this.state.categoryContent);

        return (
            <div>
                {contents}
            </div>            
        );
    }

    // none of this is needed as we could just read the JSON directly, but I wanted to include usage of a REST API in this example code
    async getArticleSummaries(search: string) {
        fetch(`blog/articles/${search}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json() as Promise<CategoryContent>
            })
            .then(data => {
                this.setState({ categoryContent: data, loading: false })
            });
    }
}