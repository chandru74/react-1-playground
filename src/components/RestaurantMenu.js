import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(null);
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categoryItemList = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards
    .filter(c => c?.card?.card?.["@type"] === ("type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || 
    "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"));

    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-lg mb-2">{name}</h1>

            <p className="mb-4">{cuisines.join(",")} - {costForTwoMessage}</p>

            <h2  className="font-bold mb-2">Menu</h2>
            {
                categoryItemList?.map((item,index) => <RestaurantCategory 
                    key={item.card.card.title} data={item?.card?.card} 
                    showItems={index === showIndex ? true: false} 
                    showIndex ={() => setShowIndex(index)}/>)
            }
        </div>
    )
}

export default RestaurantMenu;