import SearchForm from '../components/SearchForm'
import CocktailList from '../components/CocktaiList'
import Welcome from '../components/Welcome'

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