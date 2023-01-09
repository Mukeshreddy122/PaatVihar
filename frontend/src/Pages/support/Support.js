import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/maiList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./Support.css"

const Support = () => {
  return (
    <div >
      <Navbar />
      <Header type="List" />
      <div className="popular" id="support">
        <div
          className="fpItem"
        >
          <img
            id="image"
            alt=""
            src="/images/guide.png"
            className="popularImg"
          />
          <span className="popularName">Mr S.RamChandra Reddy</span>
          <span className="popularCity">Assistant Professor(Guide)</span>
        </div>
        <div
          className="fpItem"
        >
          <img
            id="image"
            alt=""
            src=""
            className="popularImg"
          />
          <span className="popularName">
            V.Sai Mukesh Reddy
          </span>
          <span className="popularCity">Full Stack Developer</span>
        </div>
        <div className="fpItem">
          <img
            id="image"
            alt=""
            src="./images/giri.jpg"
            className="popularImg"
          />
          <span className="popularName">K.Sai Narsimha Reddy</span>
          <span className="popularCity">Full Stack Developer</span>
        </div>
      </div>
      <br/>
      <div className="popular" id="support">
        <div
          className="fpItem"
        >
          <img
            id="image"
            alt=""
            src="/images/guide.png"
            className="popularImg"
          />
          <span className="popularName">Srivalli Hrushitha Ongole</span>
          <span className="popularCity">UI/UX and Frontend Developer</span>
        </div>
        <div
          className="fpItem"
        >
          <img
            id="image"
            alt=""
            src="./images/giri.jpg"
            className="popularImg"
          />
          <span className="popularName">
            Tirumala Venkata Giridhar 
          </span>
          <span className="popularCity">Backend Developer & Database Administrator</span>
        </div>
      </div>

      <MailList />
    </div>
  );
};

export default Support;
