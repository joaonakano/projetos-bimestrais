import { Link } from 'react-router-dom'
import './style.css'

export default function Header() {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />

            <header>
                <div className="nav-bar">
                    <span id="brand-name">Burger King</span>
                    <div id="nav-items">
                        <Link to='/'>Pedidos</Link>
                        <Link to='/cardapio'>Cardápio</Link>
                        <Link to='/sobre'>Sobre</Link>
                        <Link to='/contato'>Contato</Link>
                    </div>
                </div>
            </header>
    </>
    );
}