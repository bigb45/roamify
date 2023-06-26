import express from "express";
import axios from "axios";

const mapsApiKey = "AIzaSyCZth00ikqko3KdQJmVAYTgecrFWtrbrdw";

let userLocation;
const destination = express();

const keywords = [
  "indian",
  "cafe",
  "fun",
  "food",
  "book",
  "vinyl store",
  "clothestore",
  "museum",
  "book store",
  "bowling_alley",
  "cafe",
  "campground",
  "casino",
  "cemetery",
  "clothing_store",
  "park",
  "rv_park",
  "shopping_mall",
  "zoo",
];

// const request = {
//   radius: "5000",
//   type: [
//     "book_store",
//     "bowling_alley",
//     "cafe",
//     "campground",
//     "casino",
//     "cemetery",
//     "clothing_store",
//     "park",
//     "rv_park",
//     "shopping_mall",
//     "zoo",
//   ],
// };

function initUserLocation(coords) {
  // takes in coords data and returns a point on google maps
  const lat = coords.lat;
  const long = coords.long;
  const index = Math.floor(Math.random() * keywords.length);
  const keyword = keywords[index];
  console.log("-------------------------");
  console.log("trip theme:", keyword);
  userLocation = { lat: lat, long: long };

  var config = {
    method: "get",
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${keyword}&location=${
      userLocation.lat
    }%2C${userLocation.long}&radius=${10000}&key=${mapsApiKey}`,
    headers: {},
  };
  return config;
}
const getDestinationList = async (searchRequest) => {
  const response = await axios(searchRequest);
  response.data.results.map((result) => {
    if (result.rating > 3) {
      // console.log(result.name, result.rating);
    }
  });
  return response;
};
destination.get("/getDestination", async (req, res) => {
  const searchRequest = initUserLocation(req.query);
  const destinationList = await getDestinationList(searchRequest);
  res.status(200).json(destinationList.data.results);
});

export default destination;
