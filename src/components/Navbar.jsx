import React from 'react';

function Navbar() {
    return (
        // <nav className="navbar navbar-light bg-light" role="navigation">
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">

            {/* BRAND */}
            <a className="navbar-brand" href="#">
                {/* <img src="../" width="30" height="30" className="d-inline-block align-top" alt="" /> */}
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
            {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Shiping</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li> */}

                    {/* DROPDOWN */}
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> */}

                    {/* DISABLED ITEM */}
                    {/* <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li> */}

                {/* </ul> */}

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
