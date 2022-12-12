import "./App.css"
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Header from "./component/header/Header";
import Home from "./Pages/home/Home";
import SchoolList from "./component/schoolList/SchoolList";
import School from "./component/schools/School"
// import Map from "./component/maps/Map";
import MapData from "./component/maps/index"
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" index element={<Home/>}></Route>
          <Route path="/Popular" element={<SchoolList/>}></Route>
          <Route path="/Maps" element={<MapData/>}></Route>
          <Route path="/school/:id" element={<School/>}></Route>
          <Route path="/Upcoming" element={<h1>Upcoming</h1>}></Route>
          <Route path="/Top" element={<h1>Top</h1>}></Route>
        </Routes>

      </Router> 
    </div>
  );
}

export default App;
