import './App.css';
import Header from './components/Header/Header';
import Projetos from './components/Projetos/Projetos';
import Servicos from './components/Servicos/Servicos';
import Contato from './components/Contato/Contato';

function App() {
  return (
    <div className="App">
      <Header />
      <Projetos />
      <Servicos />
      <Contato />
    </div>
  );
}

export default App;
