import {React,useEffect} from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
  //import {  } from '@fortawesome/free-regular-svg-icons'


export const  CountryDetail = (props) => {
    const location=useLocation()
    const navigate = useNavigate()
    const {countryDetail}=location.state
   
    const handleBackButton=()=>{
        
        navigate("/", { replace: true })
    }

    console.log(countryDetail)
    console.log(props.allCountries.length===0)


    useEffect(() => {
            console.log(props.allCountries.length)
    }, [])


   
 return <div >
        <div className="backButton"><button onClick={handleBackButton}><FontAwesomeIcon icon={faArrowLeft}/>Back</button></div>
        <div className="countryDetails">
            <div className="countryImage">
                <img src={countryDetail.flags.png} alt=''/>
            </div>
            <div>
                <div className="countryName">
                    <h2>{countryDetail.name}</h2>
                </div>
                <div className="countryDescription">
                    <div className="mainDescription">
                        <p>Native Name : <span>{countryDetail.nativeName}</span></p>
                        <p>Population : <span>{countryDetail.population.toLocaleString('en-US')}</span></p>
                        <p>Region : <span>{countryDetail.region}</span></p>
                        <p>Sub Region : <span>{countryDetail.subregion}</span></p>
                        <p>Capital : <span>{countryDetail.capital}</span></p>

                    </div>
                    <div className="otherDescription">
                        <p>Top Level Domain :{countryDetail.topLevelDomain.map((top_LevelDomain) => {
                            return <span> {top_LevelDomain}</span>
                            
                        })}</p>
                        <p>Currencies :{countryDetail.currencies.map((currency) => {
                            return <span> {currency.name}</span>
                            
                        })}</p>
                        <p>Languages :{countryDetail.languages.map((language) => {
                            return <span> {language.name}</span>
                            
                        })}</p>
                                        
                    </div>
                   

                </div>
                <div className="borderCountry">
                        <p><i>Border countries:</i><span></span>
                           

                        </p>
                    </div>
            </div>

        </div>
    </div>

   
}