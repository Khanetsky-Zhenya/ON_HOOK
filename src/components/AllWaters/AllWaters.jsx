import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import { HeaderApp } from "../HeaderApp/HeaderApp";
import { ACTIONS } from "../../redux/constants";

import styles from "./AllWaters.module.css";

export const AllWaters = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const allWaters = useSelector((state) => state.waters);

  useEffect(() => {
    setWaters(allWaters);
  }, [allWaters]);

  const [waters, setWaters] = useState(allWaters);
 

  const onFilter = (region) => {
    const newWaters = allWaters.filter((item) => item.region.includes(region));
    setWaters(newWaters);
  };

  const redirectToWater = (id) => {
    history.push(`/waters/${id}`);
  };

  const [text, setText] = useState('');

  const waterSearch=(e)=>{
    const text = (e.target.value.toLowerCase())
    const searchWaters = allWaters.filter((item) => item.name.toLowerCase().includes(text))
    setText(setWaters(searchWaters));

  }


  return (
    <>
      <HeaderApp title="список всех водоемов и рек" />
      <div className={styles.AllWaters__wrap}>
        <div>
          <Link className={styles.AllWaters__navMain} to="/">
            <span>Главная</span>
          </Link>
          <span>/</span>
          <button className={styles.AllWaters__nav}>
            <span>Список всех водоемов и рек</span>
          </button>
        </div>
        <div className={styles.AllWaters__searchFlex}>
          <form className={styles.AllWaters__form}>
            <input
              className={styles.AllWaters__input}
              value={text}
              onChange={waterSearch}             
              placeholder="Искать здесь..."
            />
            <button className={styles.AllWaters__inputButton} type="submit">
              поиск
            </button>
          </form>
        </div>
        <div className={styles.AllWaters__regionAllButton}>
          <span>|</span>
          <button
            className={styles.AllWaters__regionButton}
            onClick={() => onFilter("brest")}
          >
            Брестская область
          </button>
          <span>|</span>
          <button
            className={styles.AllWaters__regionButton}
            onClick={() => onFilter("vitebsk")}
          >
            Витебская область
          </button>
          <span>|</span>
          <button
            className={styles.AllWaters__regionButton}
            onClick={() => onFilter("gomel")}
          >
            Гомельская область
          </button>
          <span>|</span>
          <button
            className={styles.AllWaters__regionButton}
            onClick={() => onFilter("grodno")}
          >
            Гродненская область
          </button>
          <span>|</span>
          <button
            className={styles.AllWaters__regionButton}
            onClick={() => onFilter("minsk")}
          >
            Минская область
          </button>
          <span>|</span>
          <button
            className={styles.AllWaters__regionButton}
            onClick={() => onFilter("mogilev")}
          >
            Могилевская область
          </button>
          <span>|</span>
        </div>
        <div className={styles.AllWaters__Allwaters}>
          {waters.map((item) => {
            return (
              <div
                className={styles.AllWaters__waters}
                onClick={() => redirectToWater(item.id)}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
