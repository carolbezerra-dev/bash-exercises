import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CategoryList from './components/CategoryList';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      categoryId: '',
      query: '',
      result: '',
      search: false,
    };
    this.toSearch = this.toSearch.bind(this);
    this.upCategoryId = this.upCategoryId.bind(this);
    this.upQuery = this.upQuery.bind(this);
  }

  componentDidMount() {
    getCategories().then((categories) => this.setState({ categories }));
  }

  toSearch() {
    const { categoryId, query } = this.state;
    getProductsFromCategoryAndQuery(categoryId, query)
      .then(result => { this.setState({ result, search: true, }) });
  }

  upCategoryId(search) {
    this.setState({ categoryId: search }, () => {
      this.toSearch();
    });
  }

  upQuery(search) {
    this.setState({ query: search }, () => {
      this.toSearch();
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map(({ id, name }) => (
          <CategoryList id={id} name={name} onChange={this.upCategoryId(id)} />
        ))}
        <input type="text" />
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
