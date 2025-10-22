import Produto from "./produto";

export default function ListProd({ produtos }) {
  return (
    <div className="listProd" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
      {produtos.map((produto) =>
        <Produto
          key={produto.id}
          produto={produto}
        />
      )}
    </div>
  );
}