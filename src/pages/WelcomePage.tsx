import React from "react";
import { Row, Col, Typography, Card, Button, Space, Layout } from "antd";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  ApartmentOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
const { Content } = Layout;

const WelcomePage: React.FC = () => {
  const features = [
    {
      title: "Companies",
      description: "Manage company details and teams easily.",
      icon: <ApartmentOutlined className="icon-company" />,
      link: "/companies",
    },
    {
      title: "Users",
      description: "Add, edit, and manage user accounts quickly.",
      icon: <UserOutlined className="icon-user" />,
      link: "/users",
    },
    {
      title: "Newsletter",
      description: "View posts and comments from your newsletter.",
      icon: <MailOutlined className="icon-newsletter" />,
      link: "/newsletter",
    },
  ];

  return (
    <Layout className="layout">
      <Content className="layout-content">
        {/* 🟦 Hero Section */}
        <Row className="hero-section-row">
          <Col xs={24} sm={22} md={18} lg={12} className="hero-section-col">
            <Title className="hero-title">Welcome to Management App</Title>

            <Paragraph className="hero-paragraph">
              A simple React + Ant Design demo to manage{" "}
              <Text strong>Companies</Text>, <Text strong>Users</Text>, and{" "}
              <Text strong>Newsletter</Text> posts.
            </Paragraph>

            <Space size="middle" wrap className="hero-space">
              <Link to="/companies">
                <Button size="middle" type="primary">
                  Get Started
                </Button>
              </Link>
              <Link to="/users">
                <Button size="middle">Explore Users</Button>
              </Link>
            </Space>
          </Col>
        </Row>
        <Row gutter={[24, 24]} className="features-row">
          {features.map((item) => (
            <Col 
              key={item.title}
              xs={24}
              sm={12}
              md={8}
              lg={8}
              className="features-col"
            >
              <Card
              
                hoverable
                className="feature-card"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div className="feature-div-title">{item.icon}</div>
                <Title level={4} className="feature-title">
                  {item.title}
                </Title>
                <Text type="secondary" className="feature-text">
                  {item.description}
                </Text>
                <Link to={item.link}>
                  <Button type="primary" size="middle">
                    Open
                  </Button>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default WelcomePage;
