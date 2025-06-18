import { useEffect, useState, useRef, useContext } from "react";
import RestaurantCard, { withTopRatedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [pageOffset, setPageOffset] = useState(null); // holds full pagination object
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);
  const [isSearching, setIsSearching] = useState(false);
  const [originalRestaurantList, setOriginalRestaurantList] = useState([]);

  const { loggedInUser, setUserName } = useContext(UserContext);
  // console.log("loggedInUser ", setUserName);

  const onlineStatus = useOnlineStatus();
  const RestaurantCardTopRated = withTopRatedLabel(RestaurantCard); //higher order component
  const fetchRestaurants = async () => {
    try {
      setLoading(true);

      let url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5822999&lng=77.0499762&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

      if (pageOffset) {
        const paginationParam = encodeURIComponent(JSON.stringify(pageOffset));
        url += `&pagination=${paginationParam}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      const cards =
        data?.data?.cards?.find(
          (c) => c.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurants((prev) => [...prev, ...cards]);
      setFilteredRestaurant((prev) => [...prev, ...cards]);
      setOriginalRestaurantList((prev) => [...prev, ...cards]);

      const newOffset = data?.data?.pageOffset;
      setPageOffset(newOffset ?? null); // if no more, set null
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          pageOffset &&
          !loading &&
          !isSearching
        ) {
          fetchRestaurants();
        }
      },
      { root: null, rootMargin: "200px" }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [pageOffset, loading]);

  if (!onlineStatus)
    return <h1>You are offline. Please check your internet connection.</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-emerald-100 ">
      <div className="flex justify-center px-4 py-6 gap-1.5 bg-gray-300">
        <div>
          <input
            type="text"
            placeholder="Search a restaurant here..."
            className="border-2 rounded-lg px-2 py-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-pink-500 px-4 py-1 mx-4 my-2 rounded-lg text-white"
            onClick={() => {
              if (searchText.trim() === "") return;
              const filtered = originalRestaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
              setIsSearching(true);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="bg-gray-500 px-4 py-1 mx-2 my-2 rounded-lg text-white"
            onClick={() => {
              setFilteredRestaurant(originalRestaurantList);
              setSearchText("");
              setIsSearching(false);
            }}
          >
            Clear Search
          </button>
        </div>
        <div>
          <button
            className="bg-green-500 px-4 py-1 mx-2 my-2 rounded-lg text-white"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div>
          <label>UserName </label>
          <input
            className="border border-black mx-2 p-2 rounded-lg"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 px-2">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.name}
            to={"/restaurants/" + restaurant.info.id}
            className="w-56 h-auto"
          >
            {restaurant.info.avgRating > 4.3 ? (
              <RestaurantCardTopRated resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
          </Link>
        ))}

        {/* Sentinel div for infinite scroll trigger */}
        {!filteredRestaurant.length && (
          <div className="text-center w-full py-4 text-red-600 font-semibold">
            No restaurants match your search.
          </div>
        )}
        <div ref={observerRef}></div>
      </div>
      {/* Show shimmer below if still loading */}
      {loading && <Shimmer />}
    </div>
  );
};

export default Body;
