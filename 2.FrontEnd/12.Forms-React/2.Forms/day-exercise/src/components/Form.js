import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      curriculum: '',
      office: '',
      description: '',
      results: false,
    }
    this.inputOnChange = this.inputOnChange.bind(this);
    this.finalResults = this.finalResults.bind(this);
    this.clearForm = this.clearForm.bind(this);
  };

  inputOnChange(event) {
    let { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  }
  
  finalResults() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.email}</p>
        <p>{this.state.cpf}</p>
        <p>{this.state.address}</p>
        <p>{this.state.city}</p>
        <p>{this.state.curriculum}</p>
        <p>{this.state.office}</p>
        <p>{this.state.description}</p>
      </div>
    )
  }

  clearForm() {
    this.setState({
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      curriculum: '',
      office: '',
      description: '',
    })
  }

  render() {
    const { name,
      email,
      cpf,
      address,
      city,
      curriculum,
      office,
      description,
      results } = this.state
    return (
      <div>
        <form>
          <fieldset>
            <label htmlFor='input-name'>
              Name:
              <input
                name='name'
                type='text'
                maxLength='40'
                style={{ textTransform: 'uppercase' }}
                value={name}
                onChange={this.inputOnChange}
                required
              />
            </label>
            <label htmlFor='input-email'>
              Email:
              <input
                name='email'
                type='email'
                maxLength='50'
                value={email}
                onChange={this.inputOnChange}
                required
              />
            </label>
            <label htmlFor='input-cpf'>
              CPF:
              <input
                name='cpf'
                type='text'
                value={cpf}
                onChange={this.inputOnChange}
                required
              />
            </label>
            <label htmlFor='input-address'>
              Address:
              <input
                name='address'
                type='text'
                maxLength='200'
                value={address}
                onChange={this.inputOnChange}
                required
              />
            </label>
            <label htmlFor='input-city'>
              City:
              <input
                name='city'
                type='text'
                maxLength='28'
                value={city}
                onChange={this.inputOnChange}
                required
              />
            </label>
            <label htmlFor='input-state'>
              State:
              <input name='input-state' type='checkbox' value='Bahia' /> Bahia
              <input name='input-state' type='checkbox' value='Minas Gerais' /> Minas Gerais
            </label>
            <label htmlFor='input-residence'>
              Residence:
              <input name='input-residence' type='radio' value='House' /> House
              <input name='input-residence' type='radio' value='Flat' /> Flat
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor='input-curriculum'>
              Curriculum Summary
              <textarea
                name='curriculum'
                maxLength='1000'
                value={curriculum}
                onChange={this.inputOnChange}
                required
              />
            </label>
            <label htmlFor='input-office'>
              Office
              <textarea
                name='office'
                maxLength='40'
                onMouseUp={() => alert('Important Information')}
                value={office}
                onChange={this.inputOnChange}
                required
              />
            </label>
            <label htmlFor='input-description'>
              Job description
              <textarea
                name='description'
                maxLength='500'
                value={description}
                onChange={this.inputOnChange}
                required
              />
            </label>
          </fieldset>
        </form>
          <button onClick={() => this.setState({ results: true })}>Completed</button>
          <button onClick={this.clearForm}>Clear</button>
          <div>
            {results ? this.finalResults() : ''}
          </div>
      </div>
    );
  }
}

export default Form;
