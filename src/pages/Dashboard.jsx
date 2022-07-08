import React from "redux";
import { useSelector, useDispatch } from "react-redux";
import { getWeather, reset } from "../features/weathers/weatherSlice";
import { useEffect } from "react";
import Geolocation from "../components/Geolocation";
function Dashboard() {
  const dispatch = useDispatch();

  const { weatherData, isLoading } = useSelector((state) => state.weather);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let local = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      dispatch(getWeather({ local }));
    });

    return () => {
      dispatch(reset());
      navigator.geolocation.clearWatch();
    };
  }, [dispatch]);

  if (isLoading) {
    return <>Loading ....</>;
  }
  return (
    <>
      {weatherData ? <Geolocation weatherData={weatherData} /> : <>not data</>}
    </>
  );
}

export default Dashboard;
