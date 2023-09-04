import React, { useEffect, useState } from "react";
import { GeolocatedResult, useGeolocated } from "react-geolocated";
import LoadingCircle from "./Spinner";

export default function Temperature() {
  const { coords, isGeolocationAvailable, isGeolocationEnabled }:
    GeolocatedResult = useGeolocated({
      isOptimisticGeolocationEnabled: true,
    });
  const [temperature, setTemperature] = useState();
  useEffect(() => {
    if (coords) {
      const lat = coords?.latitude;
      const lon = coords?.longitude;
      const url =
        `https://polite-seal-20.deno.dev/temperatures?lat=${lat}&lon=${lon}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => setTemperature(data.temperature))
        .catch((error) => {
          console.error(error);
        });
    }
  }, [coords]);

  return (
    <p className="text-2xl py-4">
      {!isGeolocationAvailable
        ? "I can't find you :("
        : !isGeolocationEnabled
        ? "Enable your location so I can find you :)"
        : !temperature
        ? <LoadingCircle />
        : `${temperature}°C`}
    </p>
  );
}
