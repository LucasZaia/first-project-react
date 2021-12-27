import { useState } from "react";

function Condicao() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function cadastrar(e){
        e.preventDefault();
        setUserEmail(email);
        console.log(userEmail);
    }

    function limparEmail(){
        setUserEmail('');
    }

  return (
    <div>
      <h1>Cadastrar E-mail</h1>
      <form>
        <input type="email" placeholder="Digite um e-mail..." onChange={e => setEmail(e.target.value)} />
        <button onClick={cadastrar}>Cadastrar</button>
      </form>
      {userEmail && (
        <div>
            <p>O email do usuário é: + {userEmail}</p>
            <button onClick={limparEmail}>Limpar</button>
        </div>
      )}
    </div>
  )
}

export default Condicao;
