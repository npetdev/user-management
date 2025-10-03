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
      icon: <ApartmentOutlined style={{ fontSize: 40, color: "#1677ff" }} />,
      link: "/companies",
    },
    {
      title: "Users",
      description: "Add, edit, and manage user accounts quickly.",
      icon: <UserOutlined style={{ fontSize: 40, color: "#52c41a" }} />,
      link: "/users",
    },
    {
      title: "Newsletter",
      description: "View posts and comments from your newsletter.",
      icon: <MailOutlined style={{ fontSize: 40, color: "#eb2f96" }} />,
      link: "/newsletter",
    },
  ];

  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0f7fa, #fce4ec)",
        overflowX: "hidden",
      }}
    >
      <Content
        style={{
          padding: "40px 16px 60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* 🟦 Hero Section */}
        <Row justify="center" style={{ marginBottom: 40, width: "100%" }}>
          <Col
            xs={24}
            sm={22}
            md={18}
            lg={12}
            style={{ textAlign: "center", padding: "0 12px" }}
          >
            <Title
              level={1}
              style={{
                fontWeight: 800,
                marginBottom: 12,
                fontSize: "clamp(26px, 4vw, 40px)",
                color: "#333",
              }}
            >
              Welcome to Management App
            </Title>

            <Paragraph
              style={{
                fontSize: "clamp(14px, 2vw, 16px)",
                color: "#555",
                marginBottom: 24,
                lineHeight: 1.6,
              }}
            >
              A simple React + Ant Design demo to manage{" "}
              <Text strong>Companies</Text>, <Text strong>Users</Text>, and{" "}
              <Text strong>Newsletter</Text> posts.
            </Paragraph>

            <Space
              size="middle"
              wrap
              style={{
                justifyContent: "center",
              }}
            >
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
        <Row
          gutter={[24, 24]}
          justify="center"
          style={{
            width: "100%",
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {features.map((item) => (
            <Col
              key={item.title}
              xs={24}
              sm={12}
              md={8}
              lg={8}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                hoverable
                style={{
                  borderRadius: 16,
                  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                  width: "100%",
                  maxWidth: 300,
                  textAlign: "center",
                  padding: "28px 16px",
                  background: "#fff",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div style={{ marginBottom: 12 }}>{item.icon}</div>
                <Title level={4} style={{ marginBottom: 8 }}>
                  {item.title}
                </Title>
                <Text
                  type="secondary"
                  style={{
                    fontSize: 14,
                    display: "block",
                    marginBottom: 16,
                  }}
                >
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
