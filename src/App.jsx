import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './root/HomeLayout';
import HomePage from "./pages/HomePage";
import News from "./pages/News";
import Exchanges from "./pages/Exchanges";
import CryptoDetails from "./pages/CryptoDetails";
import Cryptocurrencies from "./pages/Cryptocurrencies";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/news',
          element: <News />,
        },
        {
          path: '/exchanges',
          element: <Exchanges />,
        },
        {
          path: '/cryptocurrencies',
          element: <Cryptocurrencies/>,
        },
        {
          path: '/crypto/:coinId',
          element: <CryptoDetails/>,
        },
      ],
    },
  ]);
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
