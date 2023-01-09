import React, { useState } from "react";
import "./Header.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SchoolIcon from "@mui/icons-material/School";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { useNavigate } from "react-router-dom";
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Header = ({ type }) => {
  const [school,setSchool]=useState('')
  const [board,setBoard]=useState('')
  const [location,setLocation]=useState('')

  // navigate hook of react router dom is used to navigate to other pages
  const navigate=useNavigate()
  const handleSearch=()=>{
    navigate("/schools",{state:{school,board,location}})
  }
  return (
    <div className="header">
      <div className={type==="List"?"headerContainer listMode":"headerContainer"}>
        <div className="headerList">
          {/* icon1 */}
          <div className="headerItem active">
            <AccountBalanceIcon className="headerIcon" />
            <span onClick={()=>{
              window.location.href="http://localhost:3000/"
            }}>Schools/Colleges</span>
          </div>
          {/* icons2 */}
          {/* <div className="headerItem">
            <LibraryBooksIcon className="headerIcon" />
            <span onClick={()=>{
              window.location.href="http://localhost:3000/exams"
            }}>Exams</span>
          </div> */}
          {/* icon3 */}
          {/* <div className="headerItem">
            <SchoolIcon className="headerIcon" />
            <span onClick={()=>{
              window.location.href="http://localhost:3000/courses"
            }}>Courses</span>
          </div> */}
          {/* icon4 */}
          <div className="headerItem">
            <SupportAgentIcon className="headerIcon" />
            <span onClick={()=>{
              window.location.href="http://localhost:3000/support"
            }}>Guidance Support</span>
          </div>
        </div>
        {type !== "List" &&
          <>
            <h1 className="headerTitle">Wanna find your desired school?</h1>
            <p className="headerDoc">
              Paat-Vihar helps  find you a sustainable school that best fits
              you !!.---Right place Right school
            </p>
            {/* <button className="headerButton" onClick={()=>{window.location.href=""}}>Sign in / Register</button> */}
            <div className="headerSearch">
              <div className="headerSearchItem">
                <AccountBalanceIcon className="headerIcon" />
                <input
                  type="text"
                  placeholder="College"
                  className="headerSearchInput"
                  onChange={e=>{setSchool(e.target.value)}}
                />
              </div>
              {/* search2 */}
              <div className="headerSearchItem">
                <BookmarkIcon className="headerIcon" />
                <input
                  type="text"
                  placeholder="Board Of Education"
                  className="headerSearchInput"
                  onChange={e=>{setBoard(e.target.value)}}
                />
                {/* <span className="headerSearchText">Fees</span> */}
              </div>
              {/* search2 */}
              <div className="headerSearchItem">
                <LocationOnIcon className="headerIcon" />
                <input
                  type="text"
                  placeholder="Location"
                  className="headerSearchInput"
                  onChange={e=>{setLocation(e.target.value)}}
                />
                {/* <span className="headerSearchText">Location</span> */}
              </div>
              <div className="headerSearchItem">
                <button className="headerButton"onClick={handleSearch}>Search</button>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default Header;
