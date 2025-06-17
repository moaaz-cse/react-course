import { CDN_URL } from "../utils/constants";
const ItemList = (props) => {
  const itemsList = props?.data;
//   console.log("item", itemsList);

  return (
    <div>
      {itemsList.map((item) => (
        <div
          className="flex justify-between bg-gray-200 my-2 p-4 rounded-lg border-b-4 border-black border-solid"
          key={item?.card?.info?.id}
        >
          <div className="w-9/12 px-4">
            <p>{item?.card?.info?.name}</p>
            <p>$ {item?.card?.info?.price / 100}</p>
            <p className="text-xs">
              ratings {item?.card?.info?.ratings?.aggregatedRating?.rating} (
              {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
            </p>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 relative">
            <div className="absolute">
              <button className="bg-black rounded-lg text-white mx-10 p-1 my-28">ADD +</button>
            </div>
            <img
              className="h-32 rounded-lg"
              src={CDN_URL + item?.card?.info?.imageId}
            />
            <p className="items-center text-xs mx-8 my-4">Customisable</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
