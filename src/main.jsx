
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import HomePage from './HomePage.jsx';
import FriendsPage from './FriendsPage.jsx';

import VideoPage from './VideoPage.jsx';

const router = createBrowserRouter([
 { path: '/',
    element: <App/>,
  },
  { path: '/HomePage',
    element: <HomePage/>,
  },
  { path: '/FriendsPage',
    element: <FriendsPage/>,
  }, 
  { path: '/VideoPage',
    element: <VideoPage/>,
  },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <RouterProvider router={router}/>
    
  </React.StrictMode>,
);
