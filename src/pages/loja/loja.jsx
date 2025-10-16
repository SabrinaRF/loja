
import Produto from "../../components/produto/produto";
export default function Loja () {
    
    return (
        <div className="container">
            <Produto
                imagem={<img  alt="Imagem"  src="https://placehold.co/300x200/black/white/png/?text=prod 1"/>}
                titulo={"prod 1"} 
                valor={100} 
                estrela1
                estrela2
                estrela3
                estrela4
                estrela5
                />
        </div>

        
    );
}