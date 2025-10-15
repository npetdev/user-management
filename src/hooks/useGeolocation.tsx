import { useState, useEffect } from "react";
import { Geolocation } from "../types/weatherTypes/weatherTypes";

export const useGeolocation = () => {
  const [geolocation, setGeolocation] = useState<Geolocation>({
    latitude: null,
    longitude: null,
  });
  useEffect(() => {
    (async () => {
      navigator.geolocation
        ? navigator.geolocation.getCurrentPosition(
            (position) => {
              const coordinates = {
                latitude: position.coords.latitude.toString(),
                longitude: position.coords.longitude.toString(),
              };
              setGeolocation(coordinates);
            },
            (error) => console.error("Geolocation error:", error)
          )
        : console.error("Geolocation is not supported by this browser.");
    })();
  }, []);
  return geolocation;
};
