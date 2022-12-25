import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./Pages/home/Home";
import SchoolList from "./component/schoolList/SchoolList";
import School from "./component/schools/School";
// import Map from "./component/maps/Map";
import MapData from "./component/maps/index";
import { Contact } from "./Pages/contact/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/Home" index element={<Home />}></Route>
          <Route path="/Maps" element={<MapData />}></Route>
          <Route path="/school/:id" element={<School />}></Route>
          <Route path="/RoadMap" element={<h1>Upcoming</h1>}></Route>
          <Route path="/Popular" element={<h1><SchoolList/></h1>}></Route>
          <Route path="/Contact" element={<h1><Contact/></h1>}></Route>
          

        </Routes>
      </Router>
    </div>
  );
}

export default App;
