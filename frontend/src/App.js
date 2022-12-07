import "./App.css"
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Header from "./component/header/Header";
import Home from "./Pages/home/Home";
import SchoolList from "./component/schoolList/SchoolList";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/"  element={<Home/>}></Route>
          <Route path="/Popular" element={<SchoolList/>}></Route>
          <Route path="/Maps" element={<h1>Error Page</h1>}></Route>
          <Route path="/Upcoming" element={<h1>Three</h1>}></Route>
          <Route path="/Top" element={<h1>Three</h1>}></Route>
        </Routes>

      </Router> 
    </div>
  );
}

export default App;
