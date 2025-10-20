import Produto from "produto";

export default function listProd({produtos}) {
  return (
    <div>
      {produtos.map((produto) => (
        <Produto produto={produto}/>
      ))}
    </div>
  );
}