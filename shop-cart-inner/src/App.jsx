import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navitems from "./components/Navitems";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navitems />
      <Outlet />
    </>
  );
}

export default App;
