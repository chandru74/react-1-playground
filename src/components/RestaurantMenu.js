import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();
    console.log(useRestaurantMenu(resId))
    const resInfo = useRestaurantMenu(resId);

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
                        <li key={item.card.info.id}>
                            {item.card.info.name} - {item.card.info.price/100}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;