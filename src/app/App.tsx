import "../css/app.css";
import { Route, Switch, useLocation } from "react-router-dom";
import { HomePage } from "./screens/homePage/index";
import { ProductsPage } from "./screens/productsPage/index";
import { OrdersPage } from "./screens/ordersPage/index";
import { UserPage } from "./screens/userPage/index";
import { OtherNavbar } from "./components/headers/OtherNavbar";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { Footer } from "./components/footer";

function App() {
  const location = useLocation();
  console.log("location:", location);
  return (
    <>
      {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
