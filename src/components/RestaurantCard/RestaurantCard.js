import RestaurantClass from "./RestaurantCard.module.css";
import Search from "../Search/Search";
import resList from "../../utils/mockData";
import { CDN_URL } from "../../utils/constants";
import { useState } from "react";
const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;
  return (
    <div
      className={RestaurantClass["res-card"]}
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className={RestaurantClass["res-logo"]}
        src={CDN_URL + cloudinaryImageId}
        alt="Biryani"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>delivery in {sla.deliveryTime} minutes</h4>
    </div>
  );
};
const RestaurantContainer = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  const pull_data = (data) => {
    setListOfRestaurant(data);
  };
  return (
    <section>
      <Search pull_FilteredRestaurant={pull_data} />
      <div className={RestaurantClass["res-container"]}>
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </section>
  );
};

export default RestaurantContainer;
