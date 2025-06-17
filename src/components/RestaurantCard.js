import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;
  return (
    <div className="rounded-lg bg-gray-100">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="Biryani"
      />
      <div className="res-card-content">
        <h3 className="font-bold my-2 ml-2">{name}</h3>
        <hr />
        <em className="ml-2">{cuisines.join(", ")}</em>
        <h4 className="ml-2">{avgRating} stars</h4>
        <h4 className="ml-2">{costForTwo}</h4>
        <h4 className="pb-2 ml-2">{sla.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export const withTopRatedLabel = () => {
  return (props) => {
    return (
      <div>
        <label className="absolute my-2 px-2 rounded-lg bg-black text-white">
          Top Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
