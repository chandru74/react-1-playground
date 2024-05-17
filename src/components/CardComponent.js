import { CDN_URL } from "../utils/constants";

const CardComponent = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, costForTwo, areaName} = resData;
    return (
        <div className='res-card'>
            <img className='res-logo' alt='restaurant logo' 
            src={ CDN_URL +cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{areaName}</h4>
        </div>
    )
}

export default CardComponent;