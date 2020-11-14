import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={Data} />
    </div>
  );
}

export default App;

/* App é o arquivo pai de todos os arquivos, está no topo da árvore
Ele recebe os Compenentes e seus respectivos retornos,
mas também envia informações como no movie={Data} */
