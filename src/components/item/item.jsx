
export default function Item ({imagem, nome, valor}) {
    
    return(
        <div>
            <div>
                <img src={imagem}/>
            </div>
           <div>
                <p>{nome}</p>
                <p>R${valor}</p>
           </div>
        </div>
    );
}