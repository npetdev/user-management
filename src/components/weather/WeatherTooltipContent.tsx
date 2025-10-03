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
  if (loading) return <Spin size="small" />;
  if (error) return <Text type="danger">{error}</Text>;
  if (weatherData) {
    return (
      <Card
        size="small"
        variant="borderless"
        style={{ textAlign: "center", background: "#f0f5ff" }}
      >
        <Space direction="vertical" size="small">
          <Text strong>{weatherData.name}</Text>
          <Text>{weatherData.main.temp}°C</Text>
          <Text type="secondary">{weatherData.weather[0].description}</Text>
        </Space>
      </Card>
    );
  }
  return <>Nema podataka</>;
};
