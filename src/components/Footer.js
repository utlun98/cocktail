import Gb from '../assets/images/gb.png'
import LogoTa from '../assets/images/logo-tadb.png'
import LogoTm from '../assets/images/logo-tmdb.png'
import LogoTs from '../assets/images/logo-tsdb.png'
import {Link} from 'react-router-dom'

function Footer () {
    return(
        <footer className="footer">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12 col-sm-3">
                         2022 TheCocktailDB. <br/>
                         Proudly built in the UK 
                         <img src ={Gb} style={{width:16, height: 16}}/>
                    </div>
                    <div className="col-12 col-sm-6">
                        <center>
                            <a href="https://www.thesportsdb.com/" >
                                <img src={LogoTs} style={{width:116, height: 30, display: 'inline'}}/>
                            </a>
                            <a href="https://www.theaudiodb.com/" >
                                <img src={LogoTa} style={{width:116, height: 30, display: 'inline'}}/>
                            </a>
                            <a href="https://www.themealdb.com/" >
                                <img src={LogoTm} style={{width:116, height: 30, display: 'inline'}}/>
                            </a>
                        </center>
                    </div>
                    <div className="col-12 col-sm-3 text-center">
                        <ul className="footer-links"> 
                            <li>
                                <Link className="text-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className="text-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer