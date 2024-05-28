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
import GettingStarted from "./Pages/Docs/DocsInnerPages/GettingStarted.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "docs",
        element: <Docs />,
        children: [
          {
            path: "gettingstarted",
            element : <GettingStarted />
          }
        ]
      }
    ]
  }

]);


// ! implement the redux toolkit 
import { store } from './Store/Store.js';
import { Provider } from 'react-redux';


// ! system them detect
import detectSystemTheme from './Utilts/detectSystemTheme.js';
import Docs from './Pages/Docs/Docs.jsx';

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
