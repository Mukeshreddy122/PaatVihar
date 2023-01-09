import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/maiList/MailList";
import Footer from "../../components/footer/Footer";
import "./SchoolProfile.css";
import CancelIcon from "@mui/icons-material/Cancel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const SchoolProfile = () => {
  const officialPage=()=>{
    window.location.href="https://www.nmrec.edu.in/"
  }
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: `https://www.google.com/maps/embed?pb=!4v1672423160113!6m8!1m7!1sCAoSLEFGMVFpcE9POEhEbTh6bEI1ZTFHbHdSbzJYYmdIbm9TMlFEb0tUajJsVVdK!2m2!1d17.4056595!2d78.6213492!3f0.7879925!4f11.707310000000007!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`,
    },
    {
      src:`https://www.google.com/maps/embed?pb=!4v1672423220658!6m8!1m7!1sCAoSLEFGMVFpcE9wQWNrTzBSNF9OVmFmQloyM3NjQnlFLUM1TDM5YXRMRExaNV9Y!2m2!1d17.4056595!2d78.6213492!3f20!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`,
    },
    {
      src:`https://www.google.com/maps/embed?pb=!4v1672423469558!6m8!1m7!1sCAoSLEFGMVFpcE1ZVFdZSkFwaHhaLV8zVlFfajA3c0FZb3lLdmR6cmV4aXNVQjRI!2m2!1d17.4056595!2d78.6213492!3f20!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`
    },
    {
      src:`https://www.google.com/maps/embed?pb=!4v1672423555451!6m8!1m7!1sCAoSLEFGMVFpcFBtS19LLVlITVB6R1ZLOFBzMGdHMnpRMnQwbGpNc05UY1pNRE9I!2m2!1d17.4056595!2d78.6213492!3f340!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`
    },
    {
      src:`https://www.google.com/maps/embed?pb=!4v1672423613433!6m8!1m7!1sCAoSLEFGMVFpcFBYMnlZdXllWTZNYWN1ZWltaWp6YzZzZUp3X3BqbHJHN1BMZ1NM!2m2!1d17.4056595!2d78.6213492!3f140!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`
    },
    {
      src:`https://www.google.com/maps/embed?pb=!4v1672423662473!6m8!1m7!1sCAoSLEFGMVFpcE0tWEN1eEZ6cWxtZFRqSFh6anRhbmJtMXBUUkxxYXRvTmRuLWlN!2m2!1d17.4056595!2d78.6213492!3f300!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`
    },
    {
      src:`https://www.google.com/maps/embed?pb=!4v1673284631256!6m8!1m7!1sCAoSLEFGMVFpcE5OaDhkOXZESFoyblVzQUszSlhMM1FtSndQY1ZYWk9xRzVyLWdo!2m2!1d17.4056595!2d78.6213492!3f280!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`
    },
    {
      src:`https://www.google.com/maps/embed?pb=!4v1673284701182!6m8!1m7!1sCAoSLEFGMVFpcE1WUHV4Z19SaXFNUmttck4wWUtrNTcwTERVZnpkNWctaGIxZ3Qz!2m2!1d17.4056595!2d78.6213492!3f120!4f10!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`
    },
    {
      src:`https://www.google.com/maps/embed?pb=!4v1673284775239!6m8!1m7!1sCAoSLEFGMVFpcE1ZTVBxMHBHaWpFVElBVGpiWHpLdldoYTdrRlZlRF9hTGN6bVVh!2m2!1d17.4056595!2d78.6213492!3f200!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`
    }
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="List" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <CancelIcon className="close" onClick={() => setOpen(false)} />
            <ArrowBackIosIcon
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <ArrowForwardIosIcon
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow" onClick={SchoolProfile}>Apply Now</button>
          <h1 className="hotelTitle">Nalla Malla Reddy Engineering College</h1>
          <div className="hotelAddress">
            <LocationOnIcon />
            <span>
              Ghatkesar Mandal, Medchal District- 500088. Hyderabad,Telangana,
              India.
            </span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Contact : infomail@nmrec.edu.in,040-29705020/29706020
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <iframe title="tours"
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">TagLine--Why,What,How.</h1>
              <p className="hotelDesc">
                Engineering is the designing, testing and building of machines,
                structures and processes using maths and science. Studying it
                can lead to a rewarding career. Engineering is a discipline
                dedicated to problem solving
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for Innovation</h1>
              <span>
                Located near to city
              </span>
              <h2>
                <b>91,000 INR</b>
              </h2>
              <button onClick={officialPage}>Website URL</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default SchoolProfile;
