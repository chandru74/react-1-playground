import CardComponent from "./CardComponent";
import resList from "../utils/mock-data";
import { useState } from "react";

const Body = () =>{
  const [restaurantList, setrestaurantList] = useState(resList)
    return (
        <div className='container'>
            <div className='filter-container'>
              <button className="filter-btn"
              onClick={() => {
                console.log("button clicked")
                const filteredList = restaurantList.filter(res => res.avgRating > 4)
                setrestaurantList(filteredList)
              }}>Top Restaurants</button>
            </div>
            <div className='res-container'>
                {
                    restaurantList.map((restaurant) =>  <CardComponent key={restaurant.id} resData={restaurant}/> )
                }
            </div>
        </div>
    )
}

export default Body;