import { Outlet } from "react-router";
import { Fragment } from "react";
import "./navbar.styles.scss"
import Logo from "../../assets/Best.jpg"

const NavBar = () => {
    return (
        <Fragment>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">

                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><img src={Logo} className="logo" alt="logo"/></a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul class="navbar-nav">

                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/result">Results</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/sample">Samples</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/about">About</a>
                            </li>

                        </ul>
                    </div>

                </div>

            </nav>

            <Outlet />
        </Fragment>
    )
}

export default NavBar;