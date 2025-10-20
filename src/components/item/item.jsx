export default function Item({ imagem, nome, valor }) {
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
            <button className="btn btn-warning btn-sm">Excluir</button>
        </div>
    );
}
