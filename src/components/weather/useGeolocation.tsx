import { useState, useEffect } from "react";
type Geolocation = {
  latitude: string | null;
  longitude: string | null;
};
export const useGeolocation = () => {
  const [geolocation, setGeolocation] = useState<Geolocation>({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    const getCoords = async () =>
      navigator.geolocation
        ? navigator.geolocation.getCurrentPosition(
            (position) => {
              setGeolocation({
                latitude: position.coords.latitude.toString(),
                longitude: position.coords.longitude.toString(),
              });
            },
            (error) => console.error("Geolocation error:", error)
          )
        : console.error("Geolocation is not supported by this browser.");
    getCoords();
  }, []);

  return geolocation;
};
