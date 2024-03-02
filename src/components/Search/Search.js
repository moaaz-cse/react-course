import SearchClass from "./Search.module.css";
import resList from "../../utils/mockData";
import { useState } from "react";

const Search = (props) => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  props.pull_FilteredRestaurant(listOfRestaurant);
  return (
    <div className={SearchClass["search-container"]}>
      <input type="text" placeholder="Search Food or Restaurant" />
      <button>Search</button>
      <div>
        <button
          className={SearchClass["filter-btn"]}
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
    </div>
  );
};
export default Search;
