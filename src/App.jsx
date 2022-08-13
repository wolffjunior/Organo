import Banner from './components/Banner/Banner';
import TextField from './components/TextField/TextField';

function App() {
  return (
    <div className="App">
      <Banner />
      <TextField label="Nome" placeholder="Digite seu nome"/>
      <TextField label="Cargo" placeholder="Digite seu cargo"/>
      <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
    </div>
  );
}

export default App;
