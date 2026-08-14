import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Layout from "../components/Layout/Layout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Housing from "../pages/Housing/Housing";
import Error404 from "../pages/Error404/Error404";

function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/a-propos"
            element={<About />}
          />

          <Route
            path="/logement/:id"
            element={<Housing />}
          />

          <Route
            path="/404"
            element={<Error404 />}
          />

          <Route
            path="*"
            element={<Error404 />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRouter;