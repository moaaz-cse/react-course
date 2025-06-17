
// const Body = () => {
//   const [listOfRestaurants, setListOfRestaurants] = useState([]);
//   const [filteredRestaurant, setFilteredRestaurant] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   const onlineStatus = useOnlineStatus();

//   const RestaurantCardTopRated = withTopRatedLabel(RestaurantCard); //higher order component return a component and takes a component as parameter.

//   // * Whenever a state variable updates or changes, react triggers a reconciliation cycle(re-renders the component)
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5822999&lng=77.0499762&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );

//     const json = await data.json();
//     // console.log("jsonCard ", json);
//     // console.log(json);
//     setListOfRestaurants(
//       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//     setFilteredRestaurant(
//       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//   };

//   if (onlineStatus == false)
//     return <h1>You are offline, please theck your internet connectivity.</h1>;
//   return listOfRestaurants.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <div className="bg-gray-50">
//       <div className="flex justify-center px-4 py-6 gap-1.5 bg-gray-500">
//         <div>
//           <input
//             type="text"
//             placeholder="Search a restaurant here.."
//             className="border-2 rounded-lg px-1"
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//           />
//           <button
//             className="bg-pink-500 px-4 py-1 mx-4 my-2 rounded-lg"
//             onClick={() => {
//               const filteredRestaurant = listOfRestaurants.filter((res) =>
//                 res.info.name.toLowerCase().includes(searchText.toLowerCase())
//               );
//               setFilteredRestaurant(filteredRestaurant);
//             }}
//           >
//             Search
//           </button>
//         </div>
//         <div>
//           <button
//             className="bg-green-500 px-4 py-1 mx-2 my-2 rounded-lg"
//             onClick={() => {
//               const filteredList = listOfRestaurants.filter(
//                 (res) => res.info.avgRating > 4.5
//               );
//               setFilteredRestaurant(filteredList);
//             }}
//           >
//             Top Rated Restaurants
//           </button>
//         </div>
//       </div>
//       <div className="flex flex-wrap gap-2">
//         {filteredRestaurant.map((restaurant) => (
//           <Link
//             className="w-56 h-auto px-2 py-1 rounded-lg"
//             key={restaurant.info.id}
//             to={"/restaurants/" + restaurant.info.id}
//           >
//             {restaurant.info.avgRating > 4.3 ? (
//               <RestaurantCardTopRated resData={restaurant.info} />
//             ) : (
//               <RestaurantCard resData={restaurant.info} />
//             )}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;

// Body.jsx

// import React, { useState, useEffect, useRef } from "react";
// import Shimmer from "./Shimmer";

// const Body = () => {
//   const [listOfRestaurants, setListOfRestaurants] = useState([]);
//   const [filteredRestaurant, setFilteredRestaurant] = useState([]);
//   const [nextOffset, setNextOffset] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const observerRef = useRef(null);

//   // Fetch restaurants from Swiggy API (optionally using nextOffset)
//   const fetchRestaurants = async (offset) => {
//     try {
//       setLoading(true);
//       // Base URL with required lat/lng (example coordinates)
//       let url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.97210&lng=72.82460`;
//       if (offset) {
//         url += `&offset=${offset}`;
//       }
//       const response = await fetch(url);
//       const data = await response.json();

//       // Extract restaurant list from response (adjust based on API structure)
//       const cards = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
//       console.log(cards);
//       // Append new restaurants to state lists
//       setListOfRestaurants((prev) => [...prev, ...cards]);
//       setFilteredRestaurant((prev) => [...prev, ...cards]);
//       // Update nextOffset from API response for pagination
//       const newOffset = data?.data?.pageOffset?.nextOffset;
//       setNextOffset(newOffset || null);
//     } catch (error) {
//       console.error("Error fetching restaurants:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Initial fetch on component mount
//   useEffect(() => {
//     fetchRestaurants();
//   }, []);

//   // Setup IntersectionObserver to load more when sentinel is visible
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         // If sentinel is intersecting and we have a nextOffset (and not already loading), fetch more
//         if (entries[0].isIntersecting && nextOffset && !loading) {
//           fetchRestaurants(nextOffset);
//         }
//       },
//       { root: null, rootMargin: "200px" }
//     );
//     if (observerRef.current) {
//       observer.observe(observerRef.current);
//     }
//     return () => {
//       if (observerRef.current) {
//         observer.unobserve(observerRef.current);
//       }
//     };
//   }, [nextOffset, loading]);

//   // Example search/filter handler (preserves filteredRestaurant state)
//   const handleSearch = (searchText) => {
//     const filtered = listOfRestaurants.filter((res) =>
//       res.name.toLowerCase().includes(searchText.toLowerCase())
//     );
//     setFilteredRestaurant(filtered);
//   };

//   return (
//     <div>
//       {/* Search and filter UI would be here */}
//       <div className="restaurant-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredRestaurant.map((restaurant, index) => (
//           <RestaurantCard key={index} resData={restaurant.info} />
//         ))}
//       </div>

//       {/* Show shimmer skeletons while loading more */}
//       {loading && <Shimmer />}

//       {/* Sentinel div for intersection observer */}
//       <div ref={observerRef}></div>
//     </div>
//   );
// };

// export default Body;
