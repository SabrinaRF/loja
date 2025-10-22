import Button from '../button/button';
import { useCarrinho } from "../../contexts/CarrinhoContext";

export default function Item({ imagem, nome, valor }) {
    const { removerItem } = useCarrinho();

    return (
        <div className="list-group-item d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <img
                    src={imagem}
                    alt={nome}
                    className="me-3 rounded"
                    style={{ width: '70px', height: '45px', objectFit: 'cover' }}
                />
                <div>
                    <p className="mb-0 fw-bold">{nome}</p>
                    <small>R$ {valor}</small>
                </div>
            </div>
            <Button className="btn btn-warning btn-sm" onClick={removerItem}>Excluir</Button>
        </div>
    );
}
