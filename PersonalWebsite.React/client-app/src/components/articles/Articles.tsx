import React, { Component } from 'react';
import { RouteProps } from 'react-router';
import { useParams } from "react-router-dom";
import { ArticleSummary } from '../../interfaces/data/articleSummary';
import './Articles.css';

export function Articles() {
    let params = useParams();
    return <h2>{getArticles(params.category ?? "")}</h2>;
}

function getArticles(categoryName: string) : string {
    
    return categoryName ?? "";
}

//export class Articles extends Component<IProps & RouteProps, IState> {
//    constructor(props: IProps & RouteProps) {
//        super(props);
//        this.state = { categoryName: "", articleSummaries: [], loading: true };
//    }

//    componentDidMount() {
//        this.getArticles();
//    }

//    render() {
//        let contents = this.state.loading
//            ? <p><em>Loading...</em></p>
//            : this.state.categoryName;

//        return (
//            <div className="articles-container">
//                <div className="article-list">
//                    {this.state.categoryName}
//                </div>
//                <article className="article">
//                    article
//                </article>
//            </div>
//        );
//    }

//    async getArticles() {
//       //var categoryNameParam = CategoryName() ?? "";
//       // this.setState({ categoryName: categoryNameParam, loading: false })
//    }
//}
