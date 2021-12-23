function Evento({mensagem}){

    function evento(){
        alert("Clicado! " + mensagem);
    }

    return(
        <div>
            <p>Eventos </p>
            <button onClick={evento}>Clicar</button>
        </div>
    )
} 

export default Evento;