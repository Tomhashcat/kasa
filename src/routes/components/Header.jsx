import React from 'react';
import '../../sass/layout/_header.scss'
function Header() {
    return (
    <header className="Header">

        <img className="Logo" alt="logo" ></img>
        <div className="Links-Header">

           <div className="link-container">
                <div className="div-Orange"></div>
                <a className="Link-Acceuil" href="#" target="_blank">Acceuil</a>
           </div>
                
            
            <div  className="link-container">
                <div className="div-Orange" id="propos"></div>
                <a className="Link-propos" href="#" target="_blank"> A propos</a>
            </div>
        </div>

    </header>
    )
}

export default Header;