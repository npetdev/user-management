import { Card, Space, Spin, Typography } from "antd";

const { Text } = Typography;

type WeatherData = {
  name: string;
  main: {
    temp: number;
  };
  weather: { description: string }[];
};

type WeatherTooltipContentProps = {
  loading: boolean;
  error: string | null;
  weatherData: WeatherData | null;
};

export const WeatherTooltipContent: React.FC<WeatherTooltipContentProps> = ({
  loading,
  error,
  weatherData,
}) => {
  return (
    <Card
      size="small"
      style={{
        textAlign: "center",
        background: "#f0f5ff",
        minWidth: 140,
        borderRadius: 8,
      }}
    >
      {loading ? (
        <Spin size="small" />
      ) : error ? (
        <Text type="danger">{error}</Text>
      ) : weatherData ? (
        <Space direction="vertical" size="small">
          <Text strong>{weatherData.name}</Text>
          <Text>{Math.round(weatherData.main.temp)}°C</Text>
          <Text type="secondary">{weatherData.weather[0].description}</Text>
        </Space>
      ) : (
        <Text type="secondary">Nema podataka</Text>
      )}
    </Card>
  );
};
