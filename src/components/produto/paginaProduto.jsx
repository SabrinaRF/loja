import {useParams,Link } from "react-router-dom";
import React from "react";
import Card from 'react-bootstrap/Card';
import Header from "../header/header";
import Footer from "../footer/footer";
import produtos from "../../data/produto";
export default function PaginaProduto() {
  const {id} = useParams();
  const produtoSelecionado = produtos.find(p => p.id.toString() === id)
return(
    <main>
    <Header nome="Minha Loja" />
    <div className="container mt-4 mb-5"></div>
    <button
    className="btn btn-link text-decoration-none"
    onClick={()=> Navigate(-1)}
    >
     Voltar
    </button>
    <div className="col-md-5 text-center">
      <img src={`https://placehold.co/60x60/000000/FFFFFF/png/?text=${produtoSelecionado.titulo}`}
      alt={produtoSelecionado.titulo}
      className="img-fluid rounded shadow-sm" />
    </div>
    <div className="col-md-7">
      <h2>{produtoSelecionado.titulo}</h2>
      <div className="d-felx align-items-center mb-2">
        {Array.from({length: 5}, (_,i) =>(
          <svg
          key={i}
          width="22"
          height="22"
          fill={i< produtoSelecionado.estrelas ? "gold": "lightgray"}
          className="bi bi-star-fill"
          viewBox="0 0 16 16"
          style={{marginRight: "3px"}}
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73-3.522-3.356c-.33-.314-.16-.888.282-.95l4.898-.696L8 1.223l2.646 4.896 4.898.696c.442.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        ))}

        <span className="ms-2 text-secundary">{produtoSelecionado.avaliacao}</span>

      </div>
      <div className="border rounded p-3 bg-light mb-3">
        <strong>Deescrição</strong> {produtoSelecionado.descricao}
      </div>
      <div>
        <h3 className="text-success fw-bold">
          R$ {produtoSelecionado.valor.toFixed(2)}
        </h3>
      </div>
      <div>
        <button className="btn-success mt-3 px-4 py-2">
        Comprar
        </button>
      </div>
    </div>
  <Footer nome="Direitos Autorais. 2025." />
    </main>
    
)

}