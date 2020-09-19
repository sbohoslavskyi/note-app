import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="navbar is-success has-shadow">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item" >
                    <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28" alt="Note App"/>
                </Link>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <button className="button is-light">Create Note</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;