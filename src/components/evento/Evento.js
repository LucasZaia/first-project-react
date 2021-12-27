import Button from "./Button";

function Evento({mensagem}){

    function evento(){
        alert("Clicado! " + mensagem);
    }

    function evento2(){
        alert("Clicado! " + "Feliz Ano Novo");
    }

    return(
        <div>
            <p>Eventos </p>
            <Button event={evento} text="Mensagem de Natal"/>
            <Button event={evento2} text="Mensagem de Ano Novo"/>
        </div>
    )
} 

export default Evento;