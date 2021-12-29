import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { useState } from "react";

import './App.css'

//antd
import 'antd/dist/antd.css'
import ptBR from 'antd/lib/locale/pt_BR'

import {ConfigProvider} from 'antd';

import Navbar from "./components/Navbar";
import logo from "./logo.svg";
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import Layouts from "./pages/Layouts";

// import HelloWorld from './components/HelloWord';
// import Name from './components/Name';
// import List from './components/List';
// import Evento from './components/evento/Evento';
// import Form from './components/Forms/Form';
// import Condicao from './components/condicao/Condicao.js';
// import Lista from './components/lista/Lista';
// import Mensagem from './components/Mensagem';
// import Saudacao from './components/Saudacao';

function App() {
  // function name (name){
  //   return name;
  // }

  // const [mensagem, setMensagem] = useState()

  // const img = 'https://via.placeholder.com/150'

  // const itens = ['Fusca','Gol', 'Opala'];

  return (
     
      <Router>
        <ConfigProvider locale={ptBR}>
        <Layouts/>
        </ConfigProvider>
      </Router>



    //     <div className="App">
    //       {/* <HelloWorld></HelloWorld>
    //       <Name nome="Lucas"
    //       work="Programador"
    //       idade="20"></Name>
    //       <Name nome="Roberto"
    //       work="Programador"
    //       idade="30"></Name>
    //       <List></List> */}

    //       {/* <Evento mensagem="Olá Feliz Natal"/> */}
    //       {/* <Form/> */}

    //       {/* <Condicao/> */}
    // {/*
    //       <Lista itens ={itens}/>
    //       <Lista itens ={[]}/> */}

    //       {/* <Mensagem setMensagem={setMensagem}/>
    //       {mensagem}
    //       <Saudacao mensagem={mensagem}/>
    //        */}
    //     </div>
  );
}

export default App;
