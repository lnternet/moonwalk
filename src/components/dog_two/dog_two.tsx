import React from "react";
import styles from "./dog_two.module.css";

interface DogProps {
  color: "red" | "green";
}

export const DogTwo: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div id={styles.helmet}>
          <div id={styles.helmet_glass}></div>
          <div id={styles.helmet_bottom}></div>
        </div>
        <div className={styles.head}>
          <div className={styles.ear}></div>
          <div className={styles.backEar}></div>
          <div className={styles.snout}>
            <div className={styles.eye}></div>
            <div className={styles.nose}></div>
          </div>
          <div className={styles.collar}>
            <div className={styles.tag}></div>
          </div>
        </div>
        <div className={styles.frontLegs}>
          <div className={styles.frontLeg}></div>
          <div className={styles.backLeg}></div>
        </div>
        <div className={styles.backLegs}>
          <div className={styles.frontLeg}></div>
          <div className={styles.backLeg}></div>
        </div>
        <div className={styles.tail}></div>
      </div>
    </div>
  );
};
