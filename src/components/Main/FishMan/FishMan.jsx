import React from "react";

import images from "../../../services/images";
import styles from "./FishMan.module.css";

export const FishMan = ({ fishmans }) => {
  return (
    <>
      {fishmans.map((item) => {
        return (
          <div className={styles.Card}>
            <div className={styles.CardL}>
            <img
              className={styles.Card__avatar}
              src={item.avatar ? images[item.avatar] : images.defaultAvatar}
              alt="your avatar"
            />
            </div>
            <div className={styles.CardR}>
              <div className={styles.Card__FullName}>
                <p className={styles.Card__Name}>{item.name}</p>
                <p className={styles.Card__SecondName}>{item.secondName}</p>
              </div>
              <div className={styles.Card__Achiev}>
                <div className={styles.Card__Achiev_group1}>
                  <p className={styles.Card__Achiev_groupall}>Вид ловли:</p>
                  <p className={styles.Card__Achiev_groupUserdata}>{item.fishType}</p>
                </div>
                <div className={styles.Card__Achiev_groupBorder}></div>
                <div className={styles.Card__Achiev_group2}>
                  <p className={styles.Card__Achiev_groupall}>Трофей:</p>
                  <p className={styles.Card__Achiev_groupUserdata}>{item.trophy}</p>
                </div>
                <div className={styles.Card__Achiev_groupBorder}></div>
                <div  className={styles.Card__Achiev_group3}>
                  <p className={styles.Card__Achiev_groupall}>Общий улов:</p>
                  <p className={styles.Card__Achiev_groupUserdata}>{item.totalCatch} кг</p>
                </div>

              </div>
              
            </div>
          </div>
        );
      })}
    </>
  );
};
