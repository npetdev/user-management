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
      <Footer className="footerApp" >
        Management App ©{new Date().getFullYear()} Created with React
      </Footer>
    </Layout>
  );
};

export default LayoutApp;
