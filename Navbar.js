import React from 'react'
// import {a} from 'react-router-dom';
export default function Navbar(props) {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-a active" aria-current="page" to="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="#">Nav</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            Navbar text with an inline element
                        </span>
                    </div>
                </div>
            </nav>
            <button className='btn btn-primary' id="btn" onClick={props.func1}>Enable Dark Mode</button>
        </>
    )
}