import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navitems from "./components/Navitems";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navitems />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
