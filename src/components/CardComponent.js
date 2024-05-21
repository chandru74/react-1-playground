import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const CardComponent = (props) => {
    const { resData } = props;
    const { id, cloudinaryImageId, name, cuisines, costForTwo, areaName} = resData?.info;
    return (
        <div className='res-card'>
            <img className='res-logo' alt='restaurant logo' 
            src={ CDN_URL +cloudinaryImageId}/>
            <Link to={"/restaurants/" + id}><h3>{name}</h3></Link>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{areaName}</h4>
        </div>
    )
}

export default CardComponent;