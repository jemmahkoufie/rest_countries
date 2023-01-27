import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import { BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom'
import {CountryDetail}from './components/CountryDetail'
import { HomeComponent } from './components/HomeComponent';
import { Nav } from './components/Nav';


function App() {
  
  //Data Source
  const [allCountries, setAllCountries] = useState([])
 

  //FetchDataFunction
    const loadCountries=async()=>{
      try {
        const response = await axios.get('https://restcountries.com/v2/all');
        //const response = await axios.get('https://restcountries.com/v3.1/all');
        console.log(response.data);
        setAllCountries(response.data)
      } catch (error) {
        console.error(error);
      }
    }

  //DataSource

  useEffect(() => {
    console.log("Main Effect")
    loadCountries();
    
    return () => {
      console.log("cleanUp Effect")
    };
  }, [])


//ThemeSwitcher

  const [toggleTheme,setToggleTheme]= useState(false)
  const handleThemeToggle=()=>{
    
    setToggleTheme(!toggleTheme)
  }


//End ThemeSwitcher
// dateaRederer

  return (
    

    <div className={toggleTheme?'darktheme':''} >

      <Nav toggleTheme={handleThemeToggle} toggleThemeIcon={toggleTheme}/>
      <div className="content-wrapper">

      
    
      
      <Router>
      <Routes>
        <Route path="/" element={<HomeComponent allCountries={allCountries}  />} />
        <Route exact path="/details" element={<CountryDetail allCountries={allCountries}  />} />
      </Routes>
  
      
    </Router>
    </div>
    </div>
    
  );
}

export default App;
