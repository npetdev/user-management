import "./styles/Users&Companies.scss";
import "./styles/LayoutApp.scss";
import "./styles/WelcomePage.scss";
import { Routes, Route } from "react-router-dom";
import { UsersAndCompaniesProvider } from "./context/Context";
import LayoutApp from "./layouts/LayoutApp";
import Users from "./components/users/Users";
import Companies from "./components/companies/Companies";
import Newsletter from "./components/NewsletterComponents/Newsletter";
import Weather from "./components/weather/Weather";
import WelcomePage from "./pages/WelcomePage";
import NotExistPage from "./pages/NonExistingPage";
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutApp />}>
        <Route index element={<WelcomePage />} />
        <Route
          path="users"
          element={
            <UsersAndCompaniesProvider>
              <Users />
            </UsersAndCompaniesProvider>
          }
        />
        <Route
          path="companies"
          element={
            <UsersAndCompaniesProvider>
              <Companies />
            </UsersAndCompaniesProvider>
          }
        />
        <Route path="newsletter" element={<Newsletter />} />
        <Route path="detailsweather" element={<Weather />} />
        <Route path="*" element={<NotExistPage />} />
      </Route>
    </Routes>
  );
};
export default App;
