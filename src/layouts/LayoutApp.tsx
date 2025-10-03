import { Layout, Menu } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import Weather from "../components/weather/Weather";
import logo from "../assets/logo.png";

const { Header, Content, Footer } = Layout;

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
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 24px",
          height: "64px",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="AppLogo"
            style={{
              height: "50px",
              objectFit: "contain",
              border: "2px solid white",
              borderRadius: "6px",
            }}
          />
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
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
      <Footer style={{ textAlign: "center" }}>
        Management App ©{new Date().getFullYear()} Created with React
      </Footer>
    </Layout>
  );
};

export default LayoutApp;
