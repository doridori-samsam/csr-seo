import "./App.css";

import { useRoutes } from "react-router-dom";
import routes from "./route";

function App() {
  const element = useRoutes(routes);
  return element;
}

export default App;
