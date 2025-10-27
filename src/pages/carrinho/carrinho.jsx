import CardCarrinho from '../../components/cardCarrinho/CardCarrinho.jsx';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import MenuCarrinho from '../../components/menuCarrinho/MenuCarrinho.jsx';
import { useNavigate } from 'react-router-dom';
import { useCarrinho } from '../../hooks/useCarrinho.js';
import { useState } from 'react';
import Button from '../../components/button/Button.jsx';

export default function Carrinho() {
    const navigate = useNavigate();
    const { carrinho, limparCarrinho } = useCarrinho();
    const [mensagem, setMensagem] = useState('');

    const finalizarCompra = () => {
        if (carrinho.length === 0) {
            setMensagem('Seu carrinho está vazio!');
            return;
        }
        setMensagem('Compra finalizada com sucesso!');
        limparCarrinho();
    };

    return (
        <main>
            <Header nome="Minha Loja" />
            <MenuCarrinho
                valor={carrinho.reduce((acc, item) => acc + item.quantidade, 0)}
            />
            <div className="container mt-4">
                <Button style={"secondary"} texto="Voltar para Loja" onClick={() => navigate('/')} />

                <div className="card bg-light p-4 mt-3">
                    <h4>Carrinho de Compras</h4>
                    <hr />
                    {carrinho.length === 0 ? (
                        <p>Seu carrinho está vazio.</p>
                    ) : (
                        <>
                            <CardCarrinho itensCarrinho={carrinho} />

                            <div className="mt-3">
                                <Button
                                    style="success"
                                    onClick={finalizarCompra}
                                    texto={"Finalizar Compra"}
                                />
                                <Button
                                    style="warning"
                                    onClick={limparCarrinho}
                                    texto={"Limpar Carrinho"}
                                />
                            </div>
                        </>
                    )}
                </div>
                {mensagem && <div className="alert alert-info mt-3">{mensagem}</div>}
            </div>
            <Footer nome="Direitos Autorais. 2025." />
        </main>
    );
}
