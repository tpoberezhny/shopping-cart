import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Navbar } from "./components/Navbar";

import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <div className="max-w-[1240px] md:pl-10 px-3 w-full mx-auto">
      <ShoppingCartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
