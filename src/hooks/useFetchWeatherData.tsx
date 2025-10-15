import { useState } from "react";
import { useGeolocation } from "./useGeolocation";
import { WeatherData } from "../types/weatherTypes/weatherTypes";
import api from "../services/weatherService/apiInstance";
const API_KEY = process.env.REACT_APP_API_KEY;

export const useFetchWeatherData = () => {
  const { latitude, longitude } = useGeolocation();
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    if (!latitude || !longitude) {
      setError("Location not available.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await api.get<WeatherData>(
        `/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=en`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError("Error downloading weather data.");
    } finally {
      setTimeout(() => setLoading(false), 1000); // Adding slight delay for better UX
    }
  };
  return { weatherData, loading, error, fetchWeather };
};
