import React, { useEffect, useState } from "react";
import "./App.css";
import Country from "./pages/Country";

const baseurl = "https://restcountries.com/v3.1/";

const Twenty7 = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [capital,setCapital] = useState("")


  const filteredcapitals = ["Apia","Asmara","Dublin","Accra", "Victoria" ,"Seoul"]
  // filter on the capital filter the countires

  useEffect(() => {
    const fetchingData = async()=>{
       const url=  capital ?  `${baseurl}/capital/${capital}` :  `${baseurl}/all` 

       // ${baseurl}/all // this end point will give all the countries
       // ${baseurl}/capital/${capital} this end point will give the countries based on the capital 

        try {
            const response = await fetch(url)
            const data = await response.json()
            setCountries(data)
            setLoading(false)
            
        } catch (error) {
            setLoading(false)
            setError(true)
            console.log(error)
        }
    }

    fetchingData()
  }, [capital]);
   console.log("countries",countries)
   console.log(capital)






  return <>
   <main className="countries-1">
     
     <select>
        <option value="selectCountry">select capital</option>
        {filteredcapitals.map((item,index)=>{
            return <option key={index} onClick={(e)=>setCapital(e.target.value)}>{item}</option>
        })}
     </select>
     
    {loading? <h1>Loading...</h1> : countries?.map((country)=>{
      return  <Country key={country.name.common} {...country} loading={loading} error={error} />
    })      } 
   </main>

  
  </>
};

export default Twenty7;
