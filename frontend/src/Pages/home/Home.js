import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import SchoolList from "../../components/schoolList/SchoolList";
import PopularSchools from "../../components/popularSchools/PopularSchools";
import MailList from "../../components/maiList/MailList";
import Footer from "../../components/footer/Footer";
import PopularExams from "../../components/popularExams/PopularExams"
const Home = () => {
  const [schools, setSchools] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/schools")
      .then((res) => {
        setSchools(res.data.school);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h3 className="homeTitle">Browse By Domain</h3>
        <SchoolList />
        <h3 className="homeTitle">Most popular</h3>
        <PopularSchools />
        <h3 className="homeTitle">Popular Exams</h3>
        <PopularExams/>
        <MailList />
        <Footer />
      </div>
    </>
  );
};

export default Home;
