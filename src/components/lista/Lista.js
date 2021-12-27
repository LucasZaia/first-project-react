function Lista({itens}){
    return (
        <div>
            {itens.length > 0 ? (
                itens.map((item, index) => (
                    <p key={index}>{item}</p>
                ))) : (
                    <p>Lista Vazia</p>
                )}
        </div>
    )
}

export default Lista;