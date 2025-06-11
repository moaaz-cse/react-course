import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resID } = useParams(); //coming from the link
  const resInfo = useRestaurantMenu(resID);

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

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards);

  return (
    <div className="menu">
      <img src={CDN_URL + cloudinaryImageId} alt={name} />
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{areaName + ", " + city}</h3>
      <h3>{costForTwoMessage}</h3>
      {itemCards.map((item) => (
        <ul key={item.card.info.id}>
          <li>{item.card.info.name}</li>
          <li>Rs. {item.card.info.price / 100}</li>
          <li>{item.card.info.ratings.aggregatedRating.rating}</li>
          <li>{item.card.info.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default RestaurantMenu;
