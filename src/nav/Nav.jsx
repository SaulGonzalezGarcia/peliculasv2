import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <nav>
                        <ul>
                            <li><Link to="/comedia">Comedia</Link></li>
                            <li><Link to="/independientes"></Link>Independientes</li>
                            <li><Link to="/cienciaficcion"> </Link>Ciencia ficción</li>
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
