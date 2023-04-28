import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        // <div>
        //     <NavLink to="/">Home</NavLink>
        //     <NavLink to="/fornecedor">Fornecedor</NavLink>
        //     <NavLink to="/empresa">Empresa</NavLink>
        // </div>

        <nav className="side-menu">
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/fornecedor" activeClassName="active">
                        Fornecedor
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/empresa" activeClassName="active">
                        Empresa
                    </NavLink>
                </li>
                
            </ul>
        </nav>
    );
}

export default Navigation;


<nav className="side-menu">
    <ul>
        <li>
            <NavLink exact to="/" activeClassName="active">
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/about" activeClassName="active">
                About
            </NavLink>
        </li>
    </ul>
</nav>