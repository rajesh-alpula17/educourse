import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <div class="d-flex flex-column flex-shrink-0 p-3">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <h2 class="fs-4">EduCourse</h2>
                </a>
                <hr/>
                    <ul class="nav nav-pills flex-column mb-auto">
                        <li class="nav-item">
                            <a href="#" class="nav-link active" aria-current="page">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link link-dark">
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link link-dark">
                                Orders
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link link-dark">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link link-dark">
                                Customers
                            </a>
                        </li>
                    </ul>
                
            </div>
        </div>
    );
}

export default Header;
