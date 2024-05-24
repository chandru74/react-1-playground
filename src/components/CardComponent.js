import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const CardComponent = (props) => {
    const { resData } = props;
    const { id, cloudinaryImageId, name, cuisines, costForTwo, areaName} = resData?.info;
    return (
        <div className='m-4 p-4 w-[250px] shadow-lg rounded-lg'>
            <img className='w-64 h-56 rounded-lg' alt='restaurant logo' 
            src={ CDN_URL +cloudinaryImageId}/>
            <Link to={"/restaurants/" + id}><h3 className="py-2 font-bold">{name}</h3></Link>
            <h4 className="py-1">{cuisines.join(", ")}</h4>
            <h4 className="py-1">{costForTwo}</h4>
            <h4 className="py-1">{areaName}</h4>
        </div>
    )
}

export const vegLabelComponent = (CardComponent) => {
return (props) => {
    return(
        <div className="relative">
            <label className="absolute bg-green-500 text-white m-2 p-2 rounded-lg right-4">VEG</label>
            <CardComponent {...props}/>
        </div>
    )
}
}

export default CardComponent;