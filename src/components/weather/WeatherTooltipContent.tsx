import { Card, Space, Spin, Typography } from "antd";
import { WeatherTooltipContentProps } from "../../types/weatherTypes/weatherTypes";
const { Text } = Typography;

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
