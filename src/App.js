import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWord';
import Name from './components/Name';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {


function name (name){
  return name;
}

  const img = 'https://via.placeholder.com/150'


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

      <Evento mensagem="Olá Feliz Natal"/>
      <Form/>
    </div>
  );
}

export default App;
