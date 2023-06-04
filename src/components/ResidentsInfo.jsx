import axios from "axios";
import { useEffect, useState } from "react";


const ResidentsInfo = ({url}) => {

const [imgResident, setImgResident] = useState({})

useEffect(() => {
    axios.get(url)
        .then((res) => setImgResident(res.data));
    },[])

    
    return (
        <div className="resident-item">
            <li className="resident-card">
           
                <h2>{imgResident.name}</h2> 
                <img className="img-resident" src={imgResident.image}/>
                
                <div className="resident-info">
                <p><b>Dimension:</b> {imgResident.location?.name}</p>
                <p><b>Origin:</b> {imgResident.origin?.name}</p>
                <p><b>Status:</b> {imgResident.status}</p>
                <p><b>Episode:</b> {imgResident.episode?.length}</p>
                </div>
            </li>
        </div>
    );
};

export default ResidentsInfo;