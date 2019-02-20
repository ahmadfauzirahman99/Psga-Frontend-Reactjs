import React, {Component} from 'react';
import Navlink from "react-router-dom/es/NavLink";

class Header extends Component {

    render() {
        return (
            <div>
                <header className="main_header_area">
                    <div className="searchForm">
                        <form action="#" className="row">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="flaticon-search"></i></span>
                                <input type="search" name="search" className="form-control"
                                       placeholder="Type & Hit Enter"/>
                                <span className="input-group-addon form_hide"><i className="flaticon-close"></i></span>
                            </div>
                        </form>
                    </div>
                    <nav className="navbar navbar-expand-lg">
                        <Navlink className="navbar-brand" to="/"><h2>PSGA</h2></Navlink>

                        <ul className="right_nav">
                            <li><a href="#" className="theme_btn">Sign in</a></li>
                        </ul>
                        <div className="collapse navbar-collapse navbar_supported">
                            <ul className="navbar-nav">
                                <li><Navlink to="/">Home</Navlink></li>

                                <li><Navlink to="/about">About</Navlink></li>
                                {/*<li className="dropdown">*/}
                                    {/*<a className="nav-link dropdown-toggle" href="" role="button"*/}
                                       {/*data-toggle="dropdown">Protfolio</a>*/}
                                    {/*<ul className="dropdown-menu">*/}
                                        {/*<li><a href="portfolio.html">Portfolio Version 1</a></li>*/}
                                        {/*<li><a href="portfolio-2.html">Portfolio Version 2</a></li>*/}
                                        {/*<li><a href="portfolio-3.html">Portfolio Version 3</a></li>*/}
                                        {/*<li><a href="portfolio-4.html">Portfolio Version 4</a></li>*/}
                                        {/*<li><a href="portfolio-5.html">Portfolio Version 5</a></li>*/}
                                        {/*<li><a href="portfolio-single.html">Portfolio Single v1</a></li>*/}
                                        {/*<li><a href="portfolio-single-2.html">Portfolio Single v2</a></li>*/}
                                    {/*</ul>*/}
                                {/*</li>*/}
                                {/*<li className="dropdown">*/}
                                    {/*<a className="nav-link dropdown-toggle" href="" role="button"*/}
                                       {/*data-toggle="dropdown">Services</a>*/}
                                    {/*<ul className="dropdown-menu">*/}
                                        {/*<li><a href="services.html">Services</a></li>*/}
                                        {/*<li><a href="services-single.html">Services Single</a></li>*/}
                                    {/*</ul>*/}
                                {/*</li>*/}
                                {/*<li><a href="contact.html">Contact</a></li>*/}
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        );

    }
}

export default Header;