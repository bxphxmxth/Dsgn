import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-danger nb-3 py-0">
                    <div className="container">
                    <a href="/" className="navbar-brand">Liste de contacts</a>
                    </div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Accueil</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
