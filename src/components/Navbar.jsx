import React from 'react';

function Navbar() {
    return (
        // <nav className="navbar navbar-light bg-light" role="navigation">
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">

            {/* BRAND */}
            <a className="navbar-brand" href="/">
                {/* <img src="../" width="30" height="30" className="d-inline-block align-top" alt="" /> */}
                {/* <h1>Barbijos</h1> */}
                Barbijos
            </a>

            {/* RESPONSIVE MENU TOGGLER */}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            {/* LINKS */}
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link" href="#Home">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#Features">Features</a>
                    <a class="nav-item nav-link" href="#Products">Products</a>
                    <a class="nav-item nav-link" href="#Shiping">Shiping</a>
                    <a class="nav-item nav-link" href="#Contact">Contact</a>
                    <a class="nav-item nav-link" href="#FAQ">FAQ</a>
                </div>

                {/* search */}
                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
            </div>


        </nav>
    )
}

export default Navbar;
