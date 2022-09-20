import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './PricingPackage.module.scss';
import cx from 'classnames';

const PricingPackage = (props) => {
  const {
    data: { id, colorName, description, heading, option, price },
  } = props;
  const [isOpen, setIsOpen] = useState(true);
  const handlerOpenClose = () => {
    if (window.innerWidth < 768) {
      setIsOpen(!isOpen);
    }
  };
  const ulClassName = cx({
    [styles.close]: !isOpen,
  });
  const handlerEnter = () => {
    document.querySelectorAll('button').forEach((e) => {
      if (e.id.includes(id)) {
        return (e.style.backgroundColor = colorName);
      }
    });
  };
  const handlerLeave = () => {
    document
      .querySelectorAll('button')
      .forEach((e) => (e.style.backgroundColor = ''));
  };
  return (
    <article
      className={styles['managed-contest']}
      style={{ borderColor: `${colorName}` }}
      onMouseEnter={handlerEnter}
      onMouseLeave={handlerLeave}
    >
      <div
        className={styles.flex}
        style={{ borderColor: `${colorName}` }}
        onClick={handlerOpenClose}
      >
        <h2 className={styles.heading} style={{ color: `${colorName}` }}>
          {heading}
        </h2>
        <p style={{ color: `${colorName}`, marginRight: '50px' }}>
          {description}{' '}
          <span style={{ color: `${colorName}` }}>
            {price.country}
            {price.currency}
            {price.amount}
          </span>
        </p>
        {isOpen ? (
          <div style={{ color: `${colorName}` }} className={styles.plus}>
            -
          </div>
        ) : (
          <div style={{ color: `${colorName}` }} className={styles.plus}>
            +
          </div>
        )}
      </div>
      <ul className={ulClassName}>
        {option.map((value, i) => (
          <li key={i}>{value}</li>
        ))}{' '}
        <Link to={'/'} key={id}>
          <button className={styles.button} id={id}>
            start
          </button>
        </Link>
      </ul>
    </article>
  );
};

export default PricingPackage;
