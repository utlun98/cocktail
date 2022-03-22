import {Link} from 'react-router-dom'
import SingleCocktail from '../pages/SingleCocktail'

function Cocktail ({image, name, id, info, glass}) {
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
            <article className="cocktail">
                <div className="img-container">
                    <img src={image} alt={name}/>
                </div>
                <div className="cocktail-footer">
                    <h3>{name}</h3>
                    <h4>{glass}</h4>
                    <p>{info}</p>
                    <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
                        Details
                   
                    </Link>
                </div>
            </article>
        </div>
    )
}
export default Cocktail