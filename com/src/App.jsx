import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import Fertilizer from "../pages/Fertilizer";
import Main from "../pages/Main";
import Calculator from "../pages/Calculator";
import ProfilePage from "../pages/ProfilePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LoginPage />} />
      <Route path="/main" element={<Main />} />
      <Route path="/fertilizer" element={<Fertilizer />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/profile" element={<ProfilePage />} />
    </>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
