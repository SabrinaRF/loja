import Produto from "./produto";

export default function ListProd({produtos}){
  return (
    <div className="listProd" style={{display:"flex", flexWrap: "wrap", gap:"1rem", justifyContent:"center"}}>
      {produtos.map((produtos)=>
      <Produto 
      key={produtos.id}
      id={produtos.id}
      imagem={produtos.imagem}
      titulo={produtos.titulo}
      valor={produtos.valor}
      estrelas={produtos.estrelas}
      avaliacao={produtos.avaliacao}
      descricao={produtos.descricao}

      />
      )}
    </div>
  );
}