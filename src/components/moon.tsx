import React from "react";
import "./moon.css";
import { Dog } from "./dog";

export const Moon: React.FC = () => {
  return (
    <div className="container2">
      <div className="moon">
        <div className="crater crater1"></div>
        <div className="crater crater2"></div>
        <div className="crater crater3"></div>
        <div className="crater crater4"></div>
        <div className="crater crater5"></div>
        <div className="shadow"></div>
        <div className="eye eye-l"></div>
        <div className="eye eye-r"></div>
        <div className="mouth"></div>
        <div className="blush blush1"></div>
        <div className="blush blush2"></div>
      </div>
      <div className="orbit">
        <div className="rocket">
          <div className="window"></div>
        </div>
      </div>
      <div className="orbit slow">
        <Dog />
      </div>
    </div>
  );
};
