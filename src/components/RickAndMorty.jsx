import axios from "axios";
import { useEffect, useState } from "react";
import ResidentsInfo from "./ResidentsInfo";
import imagen from '../assets/tv-show-rick-and-morty-morty-smith-rick-sanchez-hd-wallpaper-preview.jpg'


const RickAndMorty = () => {

    const [rickAndMorty, setRickAndMorty] = useState({})
    const [ isLoading, setIsLoading] = useState(true)
    
    
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
        
        
            <h1>Rick And Morty</h1>
            <input 
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}    
                />
            <button onClick={searchByLocation}>Search</button>
            
            <div className="location-container-info">
                <h2>{rickAndMorty.dimension}</h2>
                <div className="line"></div>
                <div className="other-info-container">
                 <p><b>Type:</b> {rickAndMorty.type}</p>
                 <p><b>Dimension:</b> {rickAndMorty.dimension}</p>
                 <p><b>Population:</b> {rickAndMorty.residents?.length}</p>   
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