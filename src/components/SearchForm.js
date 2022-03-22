import {useGlobalContext} from '../context'
import {useRef,useEffect} from 'react'
import separator from '../assets/images/separator.jpg'

function SearchForm () {
    const {setSearchTerm} = useGlobalContext()
    const searchValue = useRef('')
    useEffect(() =>{
        searchValue.current.focus()
        
    }, [])
    const searchCocktail = () =>{
        setSearchTerm(searchValue.current.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
    }
    return(
        <section className="section search">
            <div className="container">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">
                            Search Your Favorite Cocktail
                    </label>
                    <input
                        type="text"
                        id="name"
                        ref={searchValue}
                        onChange={searchCocktail}
                    />
                </div>
            </form>
            <img src={separator} className="padd-2"/>
            </div>
        </section>
    )
}
export default SearchForm 