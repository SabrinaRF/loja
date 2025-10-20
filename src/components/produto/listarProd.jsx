import Produto from "./produto";

export default function ListProd({produtos}){
  return (
    <div className="listProd" style={{display:"flex", flexWrap: "wrap", gap:"1rem", justifyContent:"center"}}>
      {produtos.map((produtos)=>
      <Produto 
      key={produtos.id}
      imagem={produtos.imagem}
      titulo={produtos.titulo}
      valor={produtos.valor}
      estrelas={produtos.estrelas}

      />
      )}
    </div>
  );
}