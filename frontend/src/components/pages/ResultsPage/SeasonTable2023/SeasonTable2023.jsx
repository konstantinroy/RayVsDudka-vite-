import React from 'react';

import styles from './SeasonTable2023.module.scss';

function SeasonTable2023() {
  return (
    <div className={styles.tableBlock}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Игрок</th>
            <th className={styles.thHeader}>Т</th>
            <th className={styles.thHeader}>М</th>
            <th className={styles.thHeader}>В</th>
            <th className={styles.thHeader}>П</th>
            <th className={styles.thHeader}>ЗГ</th>
            <th className={styles.thHeader}>ПГ</th>
          </tr>
        </thead>
        <tbody>
          <tr class={styles.trWinner}>
            <td class={styles.tdPoints}>1</td>
            <td class={styles.tdName}>
              <p className={styles.playerName}>Константин</p>&nbsp;<p>Рай</p>
            </td>
            <td class={styles.tdPoints}>2</td>
            <td class={styles.tdPoints}>24</td>
            <td class={styles.tdPoints}>17</td>
            <td class={styles.tdPoints}>7</td>
            <td class={styles.tdPoints}>59</td>
            <td class={styles.tdPoints}>33</td>
          </tr>
          <tr class={styles.trLoser}>
            <td class={styles.tdPoints}>2</td>
            <td class={styles.tdName}>
              <p className={styles.playerName}>Никита</p>&nbsp;<p>Дудка</p>
            </td>
            <td class={styles.tdPoints}>2</td>
            <td class={styles.tdPoints}>24</td>
            <td class={styles.tdPoints}>7</td>
            <td class={styles.tdPoints}>17</td>
            <td class={styles.tdPoints}>33</td>
            <td class={styles.tdPoints}>59</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SeasonTable2023;
