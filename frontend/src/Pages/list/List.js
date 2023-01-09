import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import "./List.css";
const List = () => {
  const location = useLocation();
  const [school, setSchool] = useState(location.state.school);
  const [locate, setlocate] = useState(location.state.location);
  const [board, setBoard] = useState(location.state.board);

  return (
    <div>
      <Navbar />
      <Header type="List" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Filter</h1>
            <div className="lsItem">
              <label>College</label>
              <input placeholder={school} type="text" />
            </div>
            <div className="lsItem">
              <label>Location</label>
              <input type="text" placeholder={locate} />
            </div>
            <div className="lsItem">
              <label>Board of Education</label>
              <input type="text" placeholder={board} />
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Fees <small>per anum</small>
                  </span>
                  <input type="text" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max Fees <small>per anum</small>
                  </span>
                  <input type="text" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Rating</span>
                  <input type="number" className="lsOptionInput" />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
