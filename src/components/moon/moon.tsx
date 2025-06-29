import React from "react";
import styles from "./moon.module.css";
import { DogOne } from "../dog_one/dog_one";
import { DogTwo } from "../dog_two/dog_two";

export const Moon: React.FC = () => {
  return (
    <div className={styles.container2}>
      <div className={styles.moon}>
        <div className={styles.craters}>
          <div className={[styles.crater, styles.crater1].join(" ")}></div>
          <div className={[styles.crater, styles.crater2].join(" ")}></div>
          <div className={[styles.crater, styles.crater3].join(" ")}></div>
          <div className={[styles.crater, styles.crater4].join(" ")}></div>
          <div className={[styles.crater, styles.crater5].join(" ")}></div>
        </div>
        <div className={styles.shadow}></div>
        <div className={[styles.eye, styles.eyeL].join(" ")}></div>
        <div className={[styles.eye, styles.eyeR].join(" ")}></div>
        <div className={styles.mouth}></div>
        <div className={[styles.blush, styles.blush1].join(" ")}></div>
        <div className={[styles.blush, styles.blush2].join(" ")}></div>
      </div>
      <div className={styles.orbit}>
        <div className={styles.rocket}>
          <div className={styles.window}></div>
        </div>
      </div>
      <div className={[styles.orbit, styles.slow].join(" ")}>
        <DogOne />
      </div>
      <div className={[styles.orbit, styles.fast].join(" ")}>
        <DogTwo />
      </div>
    </div>
  );
};
