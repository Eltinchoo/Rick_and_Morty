import axios from "axios";
import { useEffect, useState } from "react";
import ResidentsInfo from "./ResidentsInfo";
import imagen from '../assets/rick-and-morty-primitive-collaboration-primitive-0.png'
import titleRickAndMorty from "../assets/Rick_and_Morty.svg.png"


const RickAndMorty = () => {

    const [rickAndMorty, setRickAndMorty] = useState({})
    const [ isLoading, setIsLoading] = useState(true)
    
    
    // pensar que hacer con las tarjetas sin imagen de api
    useEffect(() => {
        const randomId = Math.floor(Math.random() * 126) + 1;
        axios
          .get(`https://rickandmortyapi.com/api/location/${randomId}`)
          .then((res) => setRickAndMorty(res.data));
          setIsLoading(false)
       
    }, []);
    
    const [location, setLocation] = useState("")
  
    const searchByLocation = () => {
       
       axios
         .get(`https://rickandmortyapi.com/api/location/${location}`)
         .then((res) => setRickAndMorty(res.data))
        
    };

   
    return  isLoading? (<span className="loader"></span>) :(
        
        <div>
        
        <img className="banner-rickAndMorty" src={imagen}/>
        
        <br/>
            <img className="title-Rick-and-Morty" src={titleRickAndMorty}/>
            <br/>
            <input 
                    placeholder="Write a number here"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}    
                />
            <button  onClick={searchByLocation}>Search</button>
            
            <div className="location-container-info">
                <h2 className="dimension-name">{rickAndMorty.dimension}</h2>
                <div className="line"></div>
                <div className="other-info-container">
                 <p><b className="residents-title-info">Type:</b> {rickAndMorty.type}</p>
                 <p><b className="residents-title-info">Dimension:</b> {rickAndMorty.dimension}</p>
                 <p><b className="residents-title-info">Population:</b> {rickAndMorty.residents?.length}</p>   
                </div>
            </div>
               
            <ul className="container-residents">
                {
                    rickAndMorty.residents?.map((resident) => (
                        <ResidentsInfo 
                            key={resident}
                            url={resident}    
                            />
                    ))
                }
            </ul>
        </div>
    );
};

export default RickAndMorty;