import React from 'react';
import { Link } from 'react-router-dom';
import data from './managedContests.json';
import styles from './ManagedContests.module.scss';

const ManagedContests = () => {
  const { head, heading, headingInformation, blocks } = data;
  return (
    <div className={styles.container}>
      <article className={styles.headerBar}>
        <h2>{head}</h2>
        <h3>{heading}</h3>
        <p>{headingInformation}</p>
      </article>
      <div className={styles.flex}>
        {blocks.map(({ img, h3, p, id }) => (
          <div key={id}>
            <article>
              <span>
                <img src={`${img}`} alt="img" />
                <h3>{h3}</h3>
              </span>
              <p>{p}</p>
            </article>
          </div>
        ))}
      </div>
      <Link to="/startContest" className={styles.btn}>
        Learn More About Managed Contests
      </Link>
    </div>
  );
};

export default ManagedContests;
