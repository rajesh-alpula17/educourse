import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Batches() {
    return (
        <div className="container">
           <div className="card mb-3 col-md-8">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={logo} className="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div className="col-md-4">
                    <div className="card-body">
                      <h5 className="card-title">Batches</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    );
}

export default Batches