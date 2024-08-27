
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './Layout';

const router = createBrowserRouter([
 
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage  /> },
]
    }])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;