import React from "react";
import "../css-files/LandingPage.css";
import b3stamp from "../assets/images/b3stamp.png"
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  function goToTechnology() {
    navigate("/technology");
  }

  function goToRecruitment() {
    navigate("/recruitment");
  }

  return (
    <div className="landingMain">
      <div className="landingcontainer">
        <div className="technology">
          <div className="techchild">
            <div className="techcontent">
              <h1>TECHNOLOGY</h1>
              <Button
                variant="outlined"
                className="seeMore"
                onClick={goToTechnology}
              >
                SEE MORE
              </Button>
            </div>
          </div>
        </div>
        <div className="centerLogo">
          <img
            className="b3stamp"
            src={b3stamp}
            alt="b3stamp"
            height="170"
            width="170"
          />
        </div>
        <div className="recruitment">
          <div className="recruitmentchild">
            <div className="recruitmentcontent">
              <h1>RECRUITMENT</h1>
              <Button
                variant="outlined"
                className="seeMore"
                onClick={goToRecruitment}
              >
                SEE MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
