import{useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Loading from '../components/Loading'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='



function SingleCocktail () {

    const {id} = useParams();
    const [loading, setLoading] = useState(false)
    const [cocktail, setCocktail] =  useState(null)

    useEffect(()=>{
        setLoading(true);
        async function getCocktail() {
            try{
                const response = await fetch(`${url}${id}`)
                const data = await response.json()
                if(data.drinks){
                    const {
                        strDrink:name,
                        strDrinkThumb: image,
                        strAlcoholic:info,
                        strCategory:category,
                        strGlass:glass,
                        strInstructions:instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5
                    } = data.drinks[0]
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5
                    ]
                    const newCoctail = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients
                    }
                    setCocktail(newCoctail)
                }
                else{
                    setCocktail(null)
                }
                setLoading(false)
            }
            catch(error){
                console.log(error)
                setLoading(false)
            }
            
        }
        getCocktail()
    },[id])
    if(loading){
        return <Loading/>
    }
    if(!cocktail){
        return <h2 className="section-title">
            no cocktail to display
        </h2>
    }

    const {name,
        image,
        info,
        category,
        glass,
        instructions,
        ingredients} = cocktail;
    return(
        <div classname="container">
        <section className="section cocktail-section">
            <Link to="/" className="btn btn-primary">
                Back home
            </Link>
            <h2 className="section-title">{name}</h2>
            <div className="drink">
                <img src={image} alt={name}/>
                <div className="drink-info">
                    <p>
                        <span className="drink-data">name : </span>
                         {name}
                    </p>
                    <p>
                        <span className="drink-data">category : </span>
                         {category}
                    </p>
                    <p>
                        <span className="drink-data">info : </span>
                         {info}
                    </p>
                    <p>
                        <span className="drink-data">glass : </span>
                         {glass}
                    </p>
                    <p>
                        <span className="drink-data">instructions : </span>
                         {instructions}
                    </p>
                    <p>
                        <span className="drink-data">ingredients : </span>
                        {ingredients.map((item, index) =>{
                            return item? <span key={index}>{item}</span> : null
                        })}
                    </p>
                </div>
            </div>
        </section>
        </div>
    )
}
export default SingleCocktail