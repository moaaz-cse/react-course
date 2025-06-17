import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log("ShowItems: ",showItems);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div id={data.categoryId} className="bg-gray-400 shadow-xl my-4">
      {/**Accordian Header */}
      <div
        className="flex justify-between bg-gray-400 p-4 rounded-lg cursor-pointer"
        onClick={handleClick}
      >
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {/**Accordian body. */}
      {showItems && <ItemList className="p-3" data={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
