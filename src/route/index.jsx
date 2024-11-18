import Home from "../pages/Home.jsx";
import Chicken from "../pages/Chicken.jsx";
import Pasta from "../pages/Pasta.jsx";
import Sushi from "../pages/Sushi.jsx";

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "chicken",
        element: <Chicken />,
      },
      {
        path: "pasta",
        element: <Pasta />,
      },
      {
        path: "sushi",
        element: <Sushi />,
      },
    ],
  },
];

export default routes;
