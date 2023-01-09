import React from "react";
import "./SchoolList.css";
import GavelIcon from '@mui/icons-material/Gavel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PaletteIcon from '@mui/icons-material/Palette';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ComputerIcon from '@mui/icons-material/Computer';
import LuggageIcon from '@mui/icons-material/Luggage';
import EngineeringIcon from "@mui/icons-material/Engineering";
import RoomServiceIcon from '@mui/icons-material/RoomService';
import BiotechIcon from '@mui/icons-material/Biotech';
import ConstructionIcon from '@mui/icons-material/Construction';
const SchoolList = () => {
  return (
    <div className="school" style={{ display: "flex" }}>
      <div className="sfeaturedItem">
        <div className="domain_image">
          <EngineeringIcon className="schoolImg" fontSize="large" onClick={()=>{
              window.location.href="http://localhost:3000/engineering"
            }}/>
        </div>
      </div>
      <div className="sfeaturedItem">
        <div className="domain_image">
          <GavelIcon className="schoolImg" fontSize="large" />
        </div>
      </div>
      <div className="sfeaturedItem">
        <div className="domain_image">
          <AttachMoneyIcon className="schoolImg" fontSize="large" />
        </div>
      </div>
      <div className="sfeaturedItem">
        <div className="domain_image">
          <MedicalServicesIcon className="schoolImg" fontSize="large" />
        </div>
      </div>
      <div className="sfeaturedItem">
        <div className="domain_image">
          <PaletteIcon className="schoolImg" fontSize="large" />
        </div>
      </div>
      <div className="sfeaturedItem">
        <div className="domain_image">
          <ComputerIcon className="schoolImg" fontSize="large" />
        </div>
      </div>
      <div className="sfeaturedItem">
        <div className="domain_image">
          <LuggageIcon className="schoolImg" fontSize="large" />
        </div>
      </div>
      <div className="sfeaturedItem">
        <div className="domain_image">
          <BiotechIcon className="schoolImg" fontSize="large" />
        </div>
      </div>
      <div className="sfeaturedItem">
        <div className="domain_image">
          <ConstructionIcon className="schoolImg" fontSize="large" />
        </div>
      </div>
      <div className="sfeaturedItem">
        <div className="domain_image">
          <RoomServiceIcon className="schoolImg" fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default SchoolList;
