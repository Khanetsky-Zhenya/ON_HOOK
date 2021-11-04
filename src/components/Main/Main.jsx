import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./Main.module.css";
import { HeaderApp } from "../HeaderApp/HeaderApp";
import { FishList } from "./FishList/FishList";
import { Rating } from "./Rating/Rating";

export const Main = () => {
  const allWaters = useSelector((state) => state.waters);

  const getTopWaters = (type) => {
    const oneTypeWaters = allWaters.filter((item) => item.type === type);
    oneTypeWaters.sort((a, b) => b.rating - a.rating);
    return oneTypeWaters.slice(0, 5);
  };

  return (
    <>
      <HeaderApp title="на крючке" />
      <div className={styles.mainInfo}>
        <div className={styles.mainInfo_left}>
          <Link to="/waters">
            <button className={styles.AllWater__button}>
              Посмотреть все водоёмы
            </button>
          </Link>
          <Rating title="топ водоемов" waters={getTopWaters("lake")} />
          <Rating title="топ рек" waters={getTopWaters("river")} />
        </div>
        <div className={styles.mainInfo_right}>
          <FishList />
        </div>
      </div>
    </>
  );
};
