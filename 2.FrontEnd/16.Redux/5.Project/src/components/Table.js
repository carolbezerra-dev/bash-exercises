import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <table>
        <tr>
          <td>Descrição</td>
          <td>Tag</td>
          <td>Método de pagamento</td>
          <td>Valor</td>
          <td>Moeda</td>
          <td>Câmbio utilizado</td>
          <td>Valor convertido</td>
          <td>Moeda de conversão</td>
          <td>Editar/Excluir</td>
        </tr>
        <tr>
          <td>abaixo de descrição</td>
          <td>abaixo de tag</td>
          <td>abaixo de Método de pagamento</td>
          <td>abaixo de Valor</td>
          <td>abaixo de Moeda, propriedade name da moeda</td>
          <td>abaixo de Câmbio utilizado</td>
          <td>abaixo de Valor convertido</td>
          <td>Real</td>
          <td>
            <button data-testid="delete-btn">Delete</button>
          </td>
        </tr>
      </table>
    );
  }
}

export default Table;
