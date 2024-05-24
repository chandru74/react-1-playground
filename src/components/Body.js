import CardComponent from "./CardComponent";
import resList from "../utils/mock-data";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { vegLabelComponent } from "./CardComponent";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const VegCardComponent = vegLabelComponent(CardComponent);

  useEffect(() => {
    fetchData();
  }, [])

  const isOnline = useOnlineStatus();

  if (isOnline === false) return <h1>Looks like you are offline!!. Please check your internet connection.</h1>

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    setrestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  if (restaurantList.length === 0) {
    return <Shimmer />
  }
  return (
    <div >
      <div className='flex items-center'>
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-md"
            value={searchText}
            onChange={(e) => { setSearchText(e.target.value) }} />
          <button className="bg-gray-200 ml-2 px-4 py-2 rounded-lg"
            onClick={() => {
              const filteredResturantList = restaurantList.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

              setFilteredRestaurants(filteredResturantList);
            }}>Search</button>
        </div>
        <div className="m-4 p-4">
          <button className="bg-gray-200 px-4 py-2 rounded-lg"
            onClick={() => {
              const filteredList = restaurantList.filter(res => res.info.avgRating > 4.2)
              setFilteredRestaurants(filteredList)
            }}>Top Restaurants</button>
        </div>
      </div>
      <div className='flex flex-wrap'>
        {
          filteredRestaurants.map((restaurant) => (
            restaurant.info.veg ? (
              <VegCardComponent key={restaurant.info.id} resData={restaurant}/> 
            ):
            (
              <CardComponent key={restaurant.info.id} resData={restaurant}/>
            )
          ))
          
        }
      </div>
    </div>
  )
}

export default Body;