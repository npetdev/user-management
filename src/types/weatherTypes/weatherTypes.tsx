export type Geolocation = {
  latitude: string | null;
  longitude: string | null;
};
export type WeatherData = {
  name: string;
  main: {
    temp: number;
  };
  weather: { description: string }[];
};
export type WeatherTooltipContentProps = {
  loading: boolean;
  error: string | null;
  weatherData: WeatherData | null;
};
