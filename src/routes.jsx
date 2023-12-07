import { createBrowserRouter } from "react-router-dom";
import Counter from "./components/Counter";
import ItemList from "./components/ItemList";
import Home from "./components/Home";

 const appRoutes = [
    
  {
    path: "/",
    element: <Home />,
    children: [

        {
          path: "/items",
          element: <ItemList />,
        },
        {
          path: "/counter",
          element: <Counter />,
        },
    ]
  }, 
];

export const routes = createBrowserRouter(appRoutes)

