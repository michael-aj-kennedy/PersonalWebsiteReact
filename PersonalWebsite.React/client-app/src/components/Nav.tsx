import React, { Component } from 'react';
import { Category } from './../interfaces/data/category'

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
            <ul>
                {categories.map(category =>
                    <li key={category.id}>
                        {category.name}
                    </li>
                )}
            </ul>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Nav.renderCategories(this.state.categories);

        return (
            <nav className="Nav">
                {contents}
            </nav>
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
