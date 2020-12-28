import React from 'react';
import { connect } from 'react-redux';
import { fetchDog } from './store';

function App({ isFetching, src, fetchDog }) {
  return (
    isFetching ? <p>Loading</p>
      : (
        <div style={{ width: 500 }}>
          <button
            style={{ display: 'block' }}
            onClick={fetchDog}
            type="button"
          > 
          {/* botão envia para a store - dispatch */}
            Novo Doguinho
          </button>
          <img style={{ width: '100%' }} src={ src } alt="dog" />
        </div>
      )
  );
}

const mapStateToProps = (state) => ({
  src: state.imagePath,
  isFetching: state.isFetching});
// busca atualização do state
const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog())});
// envia ação do botão para atualizar o state
export default connect(mapStateToProps, mapDispatchToProps)(App);