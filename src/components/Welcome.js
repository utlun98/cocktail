import cocktail_left from '../assets/images/cocktail_left.png'
import cocktail_right from '../assets/images/cocktail_right.png'
import patreon_logo from '../assets/images/patreon_logo.png'
import separator from '../assets/images/separator.jpg'
function Welcome() {
    return(
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <img src={cocktail_left}/>
                    </div>
                    <div className="col-6">
                        <div className="text-center">
                            <h1>Welcome to TheCocktailDB</h1>
                            An open, crowd-sourced database of drinks and cocktails from around the world.
                            <br/>
                            We also offer a 
                            <a href="https://www.thecocktaildb.com/api.php" > free JSON API </a>
                            for anyone wanting to use it<br/>
                            If you like the site, please consider supporting us on Patrenon by clicking the link below..
                            <a href="https://www.patreon.com/thedatadb">
                                <img src={patreon_logo} style={{width:200}}/>

                                Click to Support: Currently 650 supporters
                            </a>        
                        </div>
                    </div>
                    <div className="col-3">   
                    <img src={cocktail_right}/>
                    
                    </div>
                </div>
                <img src={separator} className="padd-2"/>
            </div>
        </section>
    )
}
export default Welcome