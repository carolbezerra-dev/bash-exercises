import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Table from '../components/Table';
import fetchCurrency, { updateInputValues, updateExpenses } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
    this.dispatchBoth = this.dispatchBoth.bind(this);
  }

  componentDidMount() {
    const { fetchHere } = this.props;
    fetchHere();
  };

  updateState({ target: { name, value } }) {
    const { updateInputValues } = this.props;
    updateInputValues({ name, value })
  }

  async dispatchBoth() {
    const { fetchHere, updateExpenses } = this.props;
    await fetchHere();
    updateExpenses();
  }

  render() {
    const { currencies, value, description, method, tag, currency } = this.props;
    return (
    <div>
      <Header />
      <label htmlFor="value-input">
          Expense Amount:
          <input
            type="number"
            data-testid="value-input"
            name="value"
            value={value}
            onChange={ (e) => this.updateState(e) }
          />
        </label>
        <label htmlFor="description-input">
          Expense Description
          <input
            type="text"
            data-testid="description-input"
            name="description"
            value={description}
            onChange={ (e) => this.updateState(e) }
          />
        </label>
      <select
        data-testid="currency-input"
        name="currency"
        value={currency}
        onChange={ (e) => this.updateState(e) }
      >
        {currencies.map((item) => 
          <option data-testid={item} key={item}>{item}</option>
        )}
      </select>
      <select
        data-testid="method-input"
        name="method"
        value={method}
        onChange={ (e) => this.updateState(e) }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
      <select
        data-testid="tag-input"
        name="tag"
        value={tag}
        onChange={ (e) => this.updateState(e) }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
      <button onClick={ this.dispatchBoth }>Adicionar despesa</button>
      <Table />
    </div>);
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  value: state.wallet.value,
  description: state.wallet.description,
  method: state.wallet.method,
  tag: state.wallet.tag,
  currency: state.wallet.currency,
});

const mapDispatchToProps = (dispatch) => ({
  fetchHere: () => dispatch(fetchCurrency()),
  updateInputValues: (input) => dispatch(updateInputValues(input)),
  updateExpenses: () => dispatch(updateExpenses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
