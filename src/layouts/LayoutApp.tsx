import { Layout, Menu, Typography } from "antd";
import { HeartFilled } from "@ant-design/icons";
import { Link, Outlet, useLocation } from "react-router-dom";
import Weather from "../components/weather/Weather";
import logo from "../assets/logo.png";

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

const LayoutApp: React.FC = () => {
  const location = useLocation();
  const menuItems = [
    {
      key: "/users",
      label: <Link to="/users">Users</Link>,
    },
    {
      key: "/companies",
      label: <Link to="/companies">Companies</Link>,
    },
    {
      key: "/newsletter",
      label: <Link to="/newsletter">Newsletter</Link>,
    },
  ];

  return (
    <Layout className="layoutApp">
      <Header className="headerApp">
        <Link to="/" className="logo-link">
          <img src={logo} alt="AppLogo" className="logo" />
        </Link>
        <div className="menu-items">
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
          />
          <Weather />
        </div>
      </Header>
      <Content>
        <Outlet />
      </Content>
          <Footer
      className="footerApp"
    >
      <Text type="secondary" style={{ fontSize: "14px" }}>
        <strong>Management App</strong> © {new Date().getFullYear()} — Created with{" "}
        <HeartFilled style={{ color: "#ff4d4f" }} /> using React
      </Text>
    </Footer>
    </Layout>
  );
};

export default LayoutApp;
