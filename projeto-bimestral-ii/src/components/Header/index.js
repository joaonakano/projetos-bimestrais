import { Link } from 'react-router-dom'
import './style.css'
import logo from './assets/img/logo.png'

export default function Header() {
    return (
        <header>
            <div className="nav-bar">
                <img id="logo" src={logo} alt="Logo da Empresa"/>
                <div id="nav-items">
                    <Link to='/'>Home</Link>
                    <Link to='/cardapio'>Cardápio</Link>
                    <Link to='/sobre'>Sobre</Link>
                    <Link to='/contato'>Contato</Link>
                </div>
                <span id="brand-name">Rei do Burger</span>
            </div>
        </header>
    );
}