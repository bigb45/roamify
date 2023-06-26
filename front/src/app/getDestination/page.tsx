"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Destination() {
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const [directions, setDirections] = useState([]);

  useEffect(() => {
    getCoords();
  }, []);
  const getCoords = async () => {
    try {
      const userLoc = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      successCallback(userLoc);
    } catch (e) {
      console.log(e);
    }
  };
  const successCallback = (userLoc: any) => {
    const latitude = userLoc.coords.latitude;
    const longitude = userLoc.coords.longitude;

    setLat(latitude);
    setLong(longitude);
    getDestination(latitude, longitude);
  };

  const getDestination = async (lat: any, long: any) => {
    try {
      const res = await axios.get("http://localhost:3001/getDestination?", {
        params: {
          long: long,
          lat: lat,
        },
      });
      setDirections(res.data);
      console.log(res.data);
    } catch (e) {
      console.log("encountered error while fetching directions", e);
    }
  };

  return (
    <div className="items-center justify-center flex pt-[100px] space-y-2 flex-col">
      <div>
        <h1>Your next destination:</h1>
        <button onClick={getCoords} className="bg-slate-400 p-3 rounded-md">
          get destination
        </button>
      </div>
      {directions?.map((dest, key) => {
        return <p key={key}>{dest.name}</p>;
      })}
    </div>
  );
}

export default Destination;
