import React, { Component } from 'react';
import { Category } from './../../interfaces/data/category'
import './Nav.css';

interface IProps {
}

interface IState {
    categories: Category[];
    loading: boolean;
}

export class Nav extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { categories: [], loading: true };
    }

    componentDidMount() {
        this.getCategories();
    }

    static renderCategories(categories: Category[]) {
        return (
            <ul className="nav-items">
                {categories.map((category, index) => {
                    const isFirst = index === 0;
                    const isLast = index === categories.length - 1;

                    return (
                        <li className={`nav-item ${isFirst ? "first" : ""} ${isLast ? "last" : ""}`} key={category.id}>
                            {category.name}
                        </li>
                    );
                    
                })}
            </ul>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Nav.renderCategories(this.state.categories);

        return (
            <div className="nav-parent">
                <div className="nav-container">
                    {contents}
                </div>
            </div>
        );
    }

    async getCategories() {
        fetch('blog/categories')
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json() as Promise<Category[]>
            })
            .then(data => {
                this.setState({ categories: data, loading: false })
            });
    }
}
