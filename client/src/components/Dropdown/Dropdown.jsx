import React, { useState } from 'react';
import styles from './StyleDropdown.module.css';

import images from './Img/icon1.svg';
import exit from './Img/icon2.svg';
import searchIcons from './Img/icon.svg';
import Group7 from './Img/Group 7.svg';
import Group2 from './Img/Group 2.svg';
import Group3 from './Img/Group 3.svg';
import Group4 from './Img/Group 4.svg';
import Group5 from './Img/Group 5.svg';
import Group6 from './Img/Group 6.svg';

const languages = [
  {
    id: 1,
    language: 'Русский',
    img: Group7,
  },
  {
    id: 2,
    language: 'Английский',
    img: Group2,
  },
  {
    id: 3,
    language: 'Испанский',
    img: Group3,
  },
  {
    id: 4,
    language: 'Немецкий',
    img: Group4,
  },
  {
    id: 5,
    language: 'Итальянский',
    img: Group5,
  },
  {
    id: 6,
    language: 'Польский',
    img: Group6,
  },

];

export default function Dropdown() {
  const [visible, setVisible] = useState(styles.menu);
  const [inputValue, setInputValue] = useState(null);
  const [inputContainer, setInputContainer] = useState([]);
  const [search, setSearch] = useState('');

  const handeVisible = () => {
    setVisible(styles.menuActive);
  };
  const handeNeVisible = () => {
    setVisible(styles.menu);
  };

  const handleinput = (e) => {
    const indx = inputContainer.indexOf(e.language);
    setInputValue(e);
    { ~indx ? inputContainer.splice(indx, 1) : inputContainer.push(e.language); }
  };

  const handleDelete = (e) => {
    setInputContainer(inputContainer.filter((el) => el !== e));
  };

  const filterlang = languages?.filter((el) => el.language.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className={styles.dropdown}>
      <div>Язык</div>
      <div className={styles.container}>
        <div className={styles.containerLang}>
          {inputValue ? (
            <div className={styles.containerInputLang}>
              {inputContainer?.map((el) => (
                <div className={styles.inputLanguage} key={el}>
                  {el}
                  <img
                    src={exit}
                    alt="img"
                    onClick={() => handleDelete(el)}
                  />
                </div>
              ))}
            </div>
          ) : ''}
        </div>
        <div className={styles.newMenu}>
          {visible === styles.menuActive
            ? (
              <img
                src={images}
                alt="img"
                onClick={() => handeNeVisible()}
              />
            )
            : (
              <img
                src={images}
                alt="img"
                onClick={() => handeVisible()}
              />
            )}
        </div>
      </div>

      <ul className={visible}>
        <div className={styles.containerInpurSearch}>
          <input
            className={styles.inputSearch}
            type="text"
            value={search}
            placeholder="Поиск"
            onChange={(e) => setSearch(e.target.value)}
          />
          <img
            src={searchIcons}
            alt="img"
            className={styles.searchicon}
          />
        </div>

        {filterlang?.map((el) => (
          <li className={el.id === filterlang.length ? styles.containerСolumnEnd : styles.containerСolumn} key={el.id}>
            <div className={styles.imgLanguage}>
              <img src={el.img} alt="img" />
              <div className={styles.text}>
                {el.language}
              </div>
            </div>
            <div className={styles.Radio}>
              <input
                className={styles.inputRadio}
                type="checkbox"
                name={el.language}
                onChange={() => handleinput(el)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>

  );
}
