import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/maiList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PopularExams from "../../components/popularExams/PopularExams";
import SchoolList from "../../components/schoolList/SchoolList";
import SearchItem from "../../components/searchItem/SearchItem";
import "./Engineering.css";
const Engineering = () => {
  return (
    <div>
      <Navbar />
      <Header type="List" />
      <h2 className="headingEng">Engineering</h2>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Exams</h1>
            <div className="lsItem">
              <PopularExams />
            </div>
          </div>
        </div>
      </div>
      <div className="listContainer">
        <SearchItem />
      </div>
      
      <MailList />
    </div>
  );
};

export default Engineering;
