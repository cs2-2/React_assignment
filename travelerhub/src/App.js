import React from 'react';
import Mission from './Components/Mission';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Rocket from './Components/Rocket';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

// import './App.css';

function App() {
  const routes = createBrowserRouter(
    [
    {
      path: '/',
      element: <Rocket/>
    },
    {
      path: '/mission',
      element: <Mission/>
    },
    {
      path: '/profile',
      element: <Profile/>
    }
  ])
  return (
    
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
