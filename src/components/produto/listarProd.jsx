import Produto from "./Produto";

export default function ListProd({ produtos }) {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {produtos.map((produto) =>
        <Produto
          key={produto.id}
          produto={produto}
        />
      )}
    </div>
  );
}