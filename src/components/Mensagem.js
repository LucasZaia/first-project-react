function Mensagem({setMensagem}){
    return (
        <div>
            <p>Digite uma Mensagem</p>
            <input type="text" placeholder="digite uma mensagem" onChange={(e) => setMensagem(e.target.value)}/>
        </div>
    )
}

export default Mensagem;