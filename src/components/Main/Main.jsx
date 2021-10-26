import React from "react";
import { Link } from "react-router-dom";

import styles from "./Main.module.css";
import { HeaderApp } from "../HeaderApp/HeaderApp";
import { FishList } from "./FishList/FishList";
import { Rating } from "./Rating/Rating";

export const Main = () => {
  return (
    <>
      <HeaderApp title="на крючке" />
      <div className={styles.mainInfo}>
        <div>
          <Link to="/waters">
            <button className={styles.AllWater__button}>
              Посмотреть все водоёмы
            </button>
          </Link>
          <Rating title="топ водоемов" />
          <Rating title="топ рек" />
        </div>
        <FishList />
      </div>
    </>
  );
};
