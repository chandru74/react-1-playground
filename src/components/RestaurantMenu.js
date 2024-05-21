import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData()
    }, [])

    const {resId} = useParams();

    const fetchData = async () => {
        const data = await fetch(MENU_URL + resId);

        const json = await data.json();

        setResInfo(json);
    }

    if(resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)

    return (
        <div className="restaurant-menu">
            <h1>{name}</h1>

            <p>{cuisines.join(",")} - {costForTwoMessage}</p>

            <h2>Menu</h2>
            <ul>
                {
                    itemCards?.map(item => (
                        <li>
                            {item.card.info.name} - {item.card.info.price/100}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;