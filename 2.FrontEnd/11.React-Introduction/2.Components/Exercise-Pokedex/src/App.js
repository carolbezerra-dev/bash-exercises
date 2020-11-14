import Pokedex from './Pokedex'
import data from './data' /* Importou o arquivo com os dados */
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex data={data}/> {/* App é pai de Pokedex, passa os dados e recebe seu resultado */}
    </div>
  );
}

export default App;
