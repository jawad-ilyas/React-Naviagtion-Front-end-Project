import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      }
    ]
  }

]);


// ! implement the redux toolkit 
import { store } from './Store/Store.js';
import { Provider } from 'react-redux';


// ! system them detect
import detectSystemTheme from './Utilts/detectSystemTheme.js';
detectSystemTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} >
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
