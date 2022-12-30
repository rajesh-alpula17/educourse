import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="container">
            <nav className="navbar sticky-top navbar-expand-lg">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/"><i className="bi bi-house-door-fill"></i> Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/students"><i className="bi bi-person-square"></i> Students</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/batches"><i className="bi bi-calendar-check-fill"></i> Batches</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/courses"><i className="bi bi-book-fill"></i> Courses</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
