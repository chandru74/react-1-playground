import CardComponent from "./CardComponent";
import resList from "../utils/mock-data";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
  const [restaurantList, setrestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    setrestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  if(restaurantList.length === 0){
    return <Shimmer />
  }
    return (
        <div className='container'>
            <div className='filter-container'>
              <div className="search">
                <input 
                type="text" 
                className="search-box"
                value={searchText}
                onChange={(e) => {setSearchText(e.target.value)}}/>
                <button className="search-btn"
                onClick={() => {
                  const filteredResturantList = restaurantList.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                  setFilteredRestaurants(filteredResturantList);
                }}>Search</button>
              </div>
              <button className="filter-btn"
              onClick={() => {
                const filteredList = restaurantList.filter(res => res.info.avgRating > 4.2)
                setFilteredRestaurants(filteredList)
              }}>Top Restaurants</button>
            </div>
            <div className='res-container'>
                {
                    filteredRestaurants.map((restaurant) =>  <CardComponent key={restaurant.info.id} resData={restaurant}/> )
                }
            </div>
        </div>
    )
}

export default Body;