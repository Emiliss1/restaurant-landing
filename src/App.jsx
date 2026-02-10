import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import Menu from "./components/Menu";
import Locations from "./components/Locations";
import News from "./components/News";
import Reservation from "./components/Reservation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/locations" element={<Locations />}></Route>
          <Route path="/news/:id" element={<News />}></Route>
          <Route path="/reservation" element={<Reservation />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
