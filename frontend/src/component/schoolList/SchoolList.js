import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import "./SchoolList.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const SchoolList = () => {
  const [schoolList, setSchoolList] = useState([]);
  const { type } = useParams();
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData();
  }, [type]);
  const getData = () => {
    axios
      .get("/api/schools")
      .then((res) => {
        setSchoolList(res.data.school);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="school__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {schoolList.map((school) => (
          <Card school={school} />
        ))}
      </div>
    </div>
  );
};
export default SchoolList