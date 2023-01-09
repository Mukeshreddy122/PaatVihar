import './App.css';
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Home from './pages/home/Home';
import List from './pages/list/List';
import SchoolProfile from './pages/schoolProfile/SchoolProfile';
// import Exams from './pages/exams/Exams';
import Engineering from './pages/engineering/Engineering';
import Support from './pages/support/Support';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/schools" element={<List/>}></Route>
        
        <Route path="/engineering" element={<Engineering/>}></Route>
        <Route path="/support" element={<Support/>}></Route>
        <Route path="/school/:id" element={<SchoolProfile/>}></Route>


      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
