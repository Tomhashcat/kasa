import React from 'react';
import '../../sass/layout/_header.scss'
function Header() {
    return (
    <header className="Header">

        <img className="Logo" alt="logo" ></img>
        <div className="Links-Header">
            <a className="Link-Acceuil" href="#" target="_blank"> Acceuil</a>
            <a className="Link-Acceuil" href="#" target="_blank"> A propos</a>
        </div>

    </header>
    )
}

export default Header;