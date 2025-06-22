import React from "react";
import "./dog.css";

export const Dog: React.FC = () => {
  console.log("Woof!");
  return (
    <>
      <div className="container">
        <div id="dog_belly"></div>
        <div id="helmet">
          <div id="helmet_glass"></div>
          <div id="helmet_bottom"></div>
        </div>

        <div id="dog_head">
          <div id="dog_eye">
            <div id="dog_eye_pupil"></div>
          </div>
          <div id="dog_nose"></div>
          <div id="dog_nose_spot"></div>
          <div id="dog_ear_right"></div>
        </div>
        <div id="dog_leg_frontright"></div>
        <div id="dog_leg_backright"></div>
        <div id="dog_leg_backleft"></div>
        <div id="dog_leg_frontleft"></div>
        <div id="tail"></div>
      </div>
    </>
  );
};
