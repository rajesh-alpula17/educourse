import React from 'react';
import { Link } from 'react-router-dom';

const SideNavBar = () => {

    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-3">
                {/*<a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <h2 className="fs-4">EduCourse</h2>
                </a>
    <hr />*/}
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link" aria-current="page">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/students" className="nav-link link-dark">
                            Students
                        </a>
                    </li>
                    <li>
                        <a href="/batches" className="nav-link link-dark">
                            Batches
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link link-dark">
                            Courses
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default SideNavBar;