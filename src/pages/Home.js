import SearchForm from '../components/SearchForm'
import CocktailList from '../components/CocktaiList'
import Welcome from '../components/Welcome'
import {Link} from 'react-router-dom'

function Home () {
    return(
        
            <main>        
                <Welcome/>
                <SearchForm/>
                <CocktailList/> 
            </main>
        
    )
}
export default Home