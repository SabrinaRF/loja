import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button.jsx';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import produtos from "../../data/produto";

export default function PaginaProduto() {
  const navigate = useNavigate();
  const { id } = useParams();
  const produtoSelecionado = produtos.find(p => p.id.toString() === id)
  return (
    <main>
      <Header nome="Minha Loja" />
      <div className="container mt-4">

        <Button texto="Voltar para Loja" onClick={() => navigate("/")} />
        <div className="container mt-5 mb-5 d-flex flex-column align-items-center"
          style={{ minHeight: "70vh" }}
        >
          <div className="d-felx flex-column flex-md-row align-items-center justify-content-center justify-content-md-start mb-3 "
            style={{ width: "100%", maxWidth: "900px" }}>
            <div className="col-md-5 text-center mb-4 mb-md-0">
              <img src={`https://placehold.co/630x424/000000/FFFFFF/png/?text=${produtoSelecionado.titulo}`}
                alt={produtoSelecionado.titulo}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-7 text-center text-md-start">
              <h2 className="fw-bold mb-3">{produtoSelecionado.titulo}</h2>

              <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    width="22"
                    height="22"
                    fill={i < produtoSelecionado.estrelas ? "gold" : "lightgray"}
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                    style={{ marginRight: "3px" }}
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73-3.522-3.356c-.33-.314-.16-.888.282-.95l4.898-.696L8 1.223l2.646 4.896 4.898.696c.442.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                ))}

                <span className="ms-2 text-secundary">
                  {produtoSelecionado.avaliacao}
                </span>

              </div>
              <p class="d-block p-3 my-3 fw-normal rounded border">
                <strong>Descrição: </strong> {produtoSelecionado.descricao}
              </p>

              <div>
                <h3 className="text-success fw-bold mb-3">
                  R$ {produtoSelecionado.valor.toFixed(2)}
                </h3>
              </div>
              <div>
                <button className="btn btn-success px-4 py-2">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer nome="Direitos Autorais. 2025." />
    </main>
  );
}