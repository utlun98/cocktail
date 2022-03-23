// import logo from './logo.svg';
import './Grid.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import SingleCocktail from './pages/SingleCocktail';
import Contact from './pages/Contact';
function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
         <Route
           exact path = "/cocktail" element={<Home/>}
          />
          <Route
           exact path = "/about" element={<About/>}
          />
          <Route
           exact path = "/contact" element={<Contact/>}
          />
          <Route
           exact path = "/cocktail/:id" element={<SingleCocktail/>}
          />
          <Route
           exact path = "*" element={<Error/>}
          />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
