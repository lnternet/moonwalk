import React from "react";
import styles from "./dog_one.module.css";

interface DogProps {
  color: "red" | "green";
}

export const DogOne: React.FC = () => {
  return (
    <div className={styles.container}>
      <div id={styles.dog_belly}></div>
      <div id={styles.helmet}>
        <div id={styles.helmet_glass}></div>
        <div id={styles.helmet_bottom}></div>
      </div>

      <div id={styles.dog_head}>
        <div id={styles.dog_eye}>
          <div id={styles.dog_eye_pupil}></div>
        </div>
        <div id={styles.dog_nose}></div>
        <div id={styles.dog_nose_spot}></div>
        <div id={styles.dog_ear_right}></div>
      </div>
      <div id={styles.dog_leg_frontright}></div>
      <div id={styles.dog_leg_backright}></div>
      <div id={styles.dog_leg_backleft}></div>
      <div id={styles.dog_leg_frontleft}></div>
      <div id={styles.tail}></div>
    </div>
  );
};
