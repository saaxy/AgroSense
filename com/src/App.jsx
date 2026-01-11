import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const Router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<LoginPage />} />)
);

const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
