import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Logo from "../../component/header/Pv.png"
import { Link } from "react-router-dom";
import SchoolList from "../../component/schoolList/SchoolList"
const Home = () => {
  const [schools, setSchools] = useState([]);
  useEffect(() => {
    axios
      .get("/api/schools")
      .then((res) => {
        setSchools(res.data.school);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
         
            {
                schools.map(school=>(
                    <Link style={{textDecoration:"none",color:"white"}} to={`/school/${school._id}`}>
                        <div className="posterImage">
                            <img src={Logo}/>
                        </div>
                        <div className="posterImage__overlay">
                            <div className="posterImage__title">{school?school.name:""}</div>
                            <div className="posterImage__runtime">
                                {school?school.boardOfEduction:""}
                                <span className="posterImage__fee">
                                    {school?school.fee:""}
                                </span>

                            </div>
                            <div className="posterImage__address">{
                                school?school.address:""
                            }</div>

                        </div>



                    </Link>
                
                )
                )
            }
        </Carousel>
        <SchoolList/>
      </div>
    </>
  );
};
export default Home;
