import { Button, Tooltip } from "antd";
import { CloudOutlined } from "@ant-design/icons";
import { useFetchWeatherData } from "../../hooks/useFetchWeatherData";
import { WeatherTooltipContent } from "./WeatherTooltipContent";

const Weather: React.FC = () => {
  const { weatherData, loading, error, fetchWeather } = useFetchWeatherData();

  return (
    <Tooltip
      title={
        <WeatherTooltipContent
          loading={loading}
          error={error}
          weatherData={weatherData}
        />
      }
      color="white"
    >
      <Button
        type="default"
        icon={<CloudOutlined />}
        onMouseEnter={fetchWeather}
      >
        Weather
      </Button>
    </Tooltip>
  );
};

export default Weather;
