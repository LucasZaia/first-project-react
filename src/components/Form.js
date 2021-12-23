import {useState} from 'react';


function Form(){

    function cadastrarUser(e) {

        if(senha != confirmaSenha){
            alert("Senhas não Conferem")
        }

        e.preventDefault()
        console.log('Usuário '+nome+' Cadastrado com a senha ' + senha);

    }

    const [nome, setNome] = useState("Lucas");
    const [senha, setSenha] = useState("123");
    const [confirmaSenha, setConfirmaSenha] = useState();


    return(
        <div>
            <h1>Cadastrar</h1>
            <form onSubmit={cadastrarUser}>
                <div>
                    <input type="text" 
                    id="nome" name="nome" 
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div>
                    <input 
                    type="password" 
                    id="senha" 
                    name="senha" 
                    placeholder="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)} 
                     />
                </div>
                <div>
                <input 
                    type="password" 
                    id="ConfirmaSenha" 
                    name="Confirmasenha" 
                    placeholder="Confirme a senha"
                    onChange={(e) => setConfirmaSenha(e.target.value)} 
                     />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default Form;