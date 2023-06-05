import axios from "axios";
import { useEffect, useState } from "react";


const ResidentsInfo = ({url}) => {

const [imgResident, setImgResident] = useState({})
const [fontSizeName, setFontSizeName] = useState("20px")
const [fontSizeResidentInfo, setResidentInfo] = useState("15px")
useEffect(() => {
    axios.get(url)
        .then((res) => setImgResident(res.data));
        
        if((imgResident.name)?.length > 10){
            setFontSizeName("16px")
        }

        if((imgResident.origin?.name)?.length > 12){
            setResidentInfo("14px")
        }
    },[])

    console.log(imgResident);
    return (
        <div className="resident-item">
            <li className="resident-card">
           
                <h2 className="resident-name" style={{fontSize : fontSizeName}}>{imgResident.name}</h2> 
                <img className="img-resident" src={imgResident.image}/>
                
                <div className="resident-info">
                <p style={{fontSize : fontSizeResidentInfo}}><b>Dimension:</b> {imgResident.location?.name}</p>
                <p style={{fontSize : fontSizeResidentInfo}}><b>Origin:</b> {imgResident.origin?.name}</p>
                <p style={{fontSize : fontSizeResidentInfo}}> <b> {imgResident.status}</b></p>
                <p style={{fontSize : fontSizeResidentInfo}}><b>Episode:</b> {imgResident.episode?.length}</p>
                </div>
            </li>
        </div>
    );
};

export default ResidentsInfo;