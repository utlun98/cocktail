
import {Link} from "react-router-dom"
import logo from '../logo.png'
function Navbar () {
    return(
        <nav class="navbar navbar-expand-sm">
            <Link to="/cocktail">
                    <img src={logo} alt="cocktaik db logo" className="logo"/>
            </Link>
            <button class="navbar-toggler d-lg-none navbar-dark" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <Link className="text-link" to="/cocktail">
                                Home
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link className="text-link" to="/about">
                                About
                        </Link>
                    </li>
                   
                </ul>
              
            </div>
        </nav>

    )
}
export default Navbar