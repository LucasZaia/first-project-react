import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWord';
import Name from './components/Name';
import List from './components/List';
import Evento from './components/evento/Evento';
import Form from './components/Forms/Form';
import Condicao from './components/condicao/Condicao.js';
import Lista from './components/lista/Lista';

function App() {


function name (name){
  return name;
}

  const img = 'https://via.placeholder.com/150'

  const itens = ['Fusca','Gol', 'Opala'];


  return (
    <div className="App">
      {/* <HelloWorld></HelloWorld>
      <Name nome="Lucas"
      work="Programador"
      idade="20"></Name>
      <Name nome="Roberto"
      work="Programador"
      idade="30"></Name>
      <List></List> */}

      {/* <Evento mensagem="Olá Feliz Natal"/> */}
      {/* <Form/> */}

      <h1>Listas</h1>
      {/* <Condicao/> */}

      <Lista itens ={itens}/>
      <Lista itens ={[]}/>

    </div>
  );
}

export default App;
