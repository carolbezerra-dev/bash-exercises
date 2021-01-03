import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeaderInput extends Component {
  render() {
    const { savedEmail, total } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">Email: { savedEmail }  </span>
          <span>Total Expenditure: R$ </span>
          <span data-testid="total-field"> { total } </span>
          <span data-testid="header-currency-field"> BRL</span>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  savedEmail: state.user.email,
  total: state.wallet.total,
})

export default connect(mapStateToProps)(HeaderInput);
