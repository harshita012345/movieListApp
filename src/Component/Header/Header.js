import React from "react";
import logo from '../../../src/logo.svg';
import Search from './Search';

const Header = () => {
    return (
        <div className="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className="logo" >
                    <a href=" "> <img src={logo} alt=' '></img> </a>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ml-auto">
                        <li className="navbar-item active">
                            <a className="nav-link" href="/all">All</a>
                        </li>
                        <li className="navbar-item">
                            <a className="nav-link" href="/latest_movie" >latest</a>
                        </li>
                        <li className="navbar-item">
                            <a className="nav-link" href="/now_playing">Now Playing</a>
                        </li>
                        <li className="navbar-item">
                            <a className="nav-link" href="/upcoming">Upcoming</a>
                        </li>
                    </ul>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
            <section className="welcome mb-3 ml-1 mr-1 mt-3">
                <div>
                    {/* <img src="Images/main.jpg" alt=" "></img> */}
                    <div className="welcome-text">
                        <h1>Welcome,</h1>
                        <h3>You Choose your favorite movie.</h3>
                        <Search />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Header;