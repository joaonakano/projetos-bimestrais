import Logout from "../Button/Logout/Logout"
import "./style.css";

export default function Header() {
    return(
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />

            <header className="main-header">
                <div className="main-nav-bar">
                    <span id="brand-name">Burger King</span>
                    <div id="nav-items">
                        <a href="/add">Adicionar um Pedido</a>
                        <Logout />
                    </div>
                </div>
            </header>
        </>
    )
}