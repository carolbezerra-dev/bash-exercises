import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addUserEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isEmail: false,
      isPass: false,
      emailValue: '',
    };
    this.checkEmail = this.checkEmail.bind(this);
    this.checkPass = this.checkPass.bind(this);
  }

  checkEmail(value) {
    this.setState({ emailValue: value });
    if (value.includes('@') && value.includes('.com')) {
      return this.setState({ isEmail: true })
    } else {
      return this.setState({ isEmail: false })
    }
  }

  checkPass(event) {
    const passLength = event.target.value.length;
    const SIX = 6;
    if (passLength >= SIX) {
      return this.setState({ isPass: true })
    } else {
      return this.setState({ isPass: false })
    }
  }

  render() {
    const { isEmail, isPass, emailValue } = this.state;
    const { history, saveEmail } = this.props;
    return (
      <div>
        <h1>Trybe Wallet</h1>
        <label htmlFor="email-input">
          Email:
          <input
            type="email"
            data-testid="email-input"
            value={ emailValue }
            onChange={ (e) => this.checkEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password-input">
          Password:
          <input
            type="password"
            data-testid="password-input"
            minLength="6"
            onChange={ this.checkPass }
          />
        </label>
        <div>
          {isPass && isEmail
            ? <button
                onClick={ () => saveEmail(emailValue) && history.push('./carteira') }
                type="button"
              >
                Entrar
              </button>
              : <button type="button" disabled>Entrar</button>}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (value) => dispatch(addUserEmail(value)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  saveEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
