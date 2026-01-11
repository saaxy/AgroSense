<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

=======
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
>>>>>>> 437dc54b9abcfb0482dac9f7a5db47dcc9e44652

const Router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<LoginPage />} />)
);

<<<<<<< HEAD
export default App;

=======
const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
>>>>>>> 437dc54b9abcfb0482dac9f7a5db47dcc9e44652
