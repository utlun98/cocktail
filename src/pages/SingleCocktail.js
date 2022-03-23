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
        <>
        <section className="section cocktail-section">
            <Link to="/" className="btn btn-primary">
                Back home
            </Link>
            <h2 className="section-title">{name}</h2>
            </section>
            <div classname="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-sm-3">
                <img src={image} alt={name}/></div>
                <div className="col-12 col-sm-9">

                    <p className="color-p">
                        <span className="drink-data">Name : </span>
                         {name}
                    </p>
                    <p className="color-p">
                        <span className="drink-data">Category : </span>
                         {category}
                    </p>
                    <p className="color-p">
                        <span className="drink-data">Info : </span>
                         {info}
                    </p>
                    <p className="color-p">
                        <span className="drink-data">Glass : </span>
                         {glass}
                    </p>
                    <p className="color-p">
                        <span className="drink-data">Instructions : </span>
                         {instructions}
                    </p>
                    <p className="color-p">
                        <span className="drink-data">Ingredients : </span>
                        {ingredients.map((item, index) =>{
                            return item? <span key={index}>{item}</span> : null
                        })}
                    </p>
                </div>
                </div>
            </div>
            </>
        
        
    )
}
export default SingleCocktail