import {useGlobalContext} from '../context'
import Cocktail from './Cocktail'
import Loading from './Loading'
function CocktailList () {
    const {cocktails, loading} = useGlobalContext()
    console.log(cocktails)
    if(loading){
        return <Loading/>
    }
    if(cocktails.length < 1){
        return (
        <h2 className="section-title">
            no cocktails matched your search criteria
        </h2>)
    }
    return(
        <section className="section">
            <div className="container">
                <div className="row">
                {cocktails.map((item) =>{
                    return <Cocktail key={item.id} {...item}/>            })}
                </div>
            </div>
        </section>
    )
}
export default CocktailList