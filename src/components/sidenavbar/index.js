import React from 'react';
import { Link } from 'react-router-dom';

const SideNavBar = () => {

    return (
        <div>
            <div class="d-flex flex-column flex-shrink-0 p-3">
                {/*<a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <h2 class="fs-4">EduCourse</h2>
                </a>
    <hr />*/}
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <a href="/" class="nav-link" aria-current="page">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/students" class="nav-link link-dark">
                            Students
                        </a>
                    </li>
                    <li>
                        <a href="/batches" class="nav-link link-dark">
                            Batches
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link link-dark">
                            Courses
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default SideNavBar;