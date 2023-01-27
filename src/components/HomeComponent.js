import { React,useState} from "react";

import {Link} from 'react-router-dom'

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCaretDown } from "@fortawesome/free-solid-svg-icons";


export function HomeComponent(props) {
    const [isFilterActive, setIsFilterActive] = useState(false)
    //Data Source
   
    const [filteredCountries,setFilteredCountries]=useState(props.allCountries)
    //DataSource
  const regions=['Africa','Americas','Asia','Europe','Oceania']
  //const [selectedRegion, setSelectedRegion] = useState('')
  
  
  const handleRegionChange=({target})=>{
    switch(regions.includes(target.value)){
      case true:{
         setIsFilterActive(true)
    console.log(target.value)
  setFilteredCountries(props.allCountries.filter((country)=>{
    return country.region===target.value
  
  })
  
    )
   
    console.log(filteredCountries)
    break
      }
      default:      
          setIsFilterActive(false)
    }
   
  }
  
  //End Filter
  
  //Search Countries
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch=({target})=>{
    setSearchTerm(target.value);
    console.log (searchTerm)
    setFilteredCountries(isFilterActive?filteredCountries.filter((country)=>{return country.name.toLowerCase().includes(target.value.toLowerCase())}):props.allCountries.filter((country)=>{return country.name.toLowerCase().includes(target.value.toLowerCase())}))
    console.log(props.allCountries)
    target.value.trim()===''?setIsFilterActive(false):setIsFilterActive(true)
    
    
  }
  
    return ( <>
        <div className='filterContainer'>
        <div className='searchFilter'>
          <FontAwesomeIcon icon={faSearch}/><input  onChange={handleSearch} placeholder='Search for country...'/>
        </div>
        <div className='regionFilter'>
           
           <select id="regionSelection" onChange={handleRegionChange} className='seleRegion'>

        <option>Filter by Region</option>
        {regions.map((region,index)=>{
          return  <option key={index} value={region}>{region}</option>
        })}
        

      </select> 
      
        </div>
        
        
       

      </div>
        <div className='countryContainer'>
        {
            
                isFilterActive? filteredCountries.map((country,index)=>{

                  return <Link to="/details" className='countryCard' state={{countryDetail:country}}><div >
                            <div className="countryFlag">
                              <img src={country.flags.svg} alt=""  />
                            </div>
                            <div className='countryName'>
                              <h3>{country.name}</h3>
                            </div>
                            <div className='countryDescription'>
                                <p>population: <span>{country.population.toLocaleString('en-US')}</span></p>
                                <p>Region: <span>{country.region}</span></p>
                                <p>Capital: <span>{country.capital}</span></p>
        
                            </div>
        
                         </div></Link>
                }):
        props.allCountries.map((country,index)=>{
          return <Link  to="/details" state={{countryDetail:country}}><div className='countryCard'>
                    <div className="countryFlag">
                      <img src={country.flag} alt=""  />
                    </div>
                    <div className='countryName'>
                      <h3>{country.name}</h3>
                    </div>
                    <div className='countryDescription'>
                        <p>population: <span>{country.population.toLocaleString('en-US')}</span></p>
                        <p>Region: <span>{country.region}</span></p>
                        <p>Capital: <span>{country.capital}</span></p>

                    </div>

                 </div></Link>
        })
              }
            
            

        
      </div>
      </>

    ) 
    }