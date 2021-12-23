import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWord';
import Name from './components/Name';
import List from './components/List';

function App() {


function name (name){
  return name;
}

  const img = 'https://via.placeholder.com/150'


  return (
    <div className="App">
      <HelloWorld></HelloWorld>
      <Name nome="Lucas"
      work="Programador"
      idade="20"></Name>
      <Name nome="Roberto"
      work="Programador"
      idade="30"></Name>
      <List></List>
    </div>
  );
}

export default App;
