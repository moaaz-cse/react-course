import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resID } = useParams(); //coming from the link
  const resInfo = useRestaurantMenu(resID);

  const [showIndex, setShowIndex] = useState(0);
  if (resInfo === null) return <Shimmer />;
  const {
    id,
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    areaName,
    city,
  } = resInfo.cards[2].card.card.info;

  //Filtering all the categories of each restaurant.
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ); // card?. === ["card"]?.

  return (
    <div className="m-auto w-6/12 bg-gray-100">
      <img
        className="w-full h-96 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h1 className="font-bold my-2 ml-2">{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{areaName + ", " + city}</h3>
      <h3>{costForTwoMessage}</h3>
      {/** loop through categories. */}
      {categories.map((category, index) => (
        //It is a controlled component.
        <RestaurantCategory
          key={category.card?.card?.categoryId}
          data={category.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => {
            if (index != showIndex) setShowIndex(index);
            else setShowIndex(null);
          }} //giving child to have access of setShowIndex and update the index.
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
