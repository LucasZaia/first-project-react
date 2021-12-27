function Saudacao({mensagem}){

    function geraMensagem(algumaMsg){
        return 'A mensagem do dia é: ' + algumaMsg
    }
    return(
        <>
            {mensagem && <p>{geraMensagem(mensagem)}</p>}
        </>
    )
}

export default Saudacao;