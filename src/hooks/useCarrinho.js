import { useContext } from "react";
import { CarrinhoContext } from "../contexts/CarrinhoContext.jsx";

export function useCarrinho() {
  const context = useContext(CarrinhoContext);

  return context;
}
