import React from "react";
import styles from "./SeasonTable2022.module.scss";

function SeasonTable2022() {
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
            <th className={styles.thHeader}>Н</th>
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
            <td class={styles.tdPoints}>9</td>
            <td class={styles.tdPoints}>103</td>
            <td class={styles.tdPoints}>46</td>
            <td class={styles.tdPoints}>36</td>
            <td class={styles.tdPoints}>25</td>
            <td class={styles.tdPoints}>257</td>
            <td class={styles.tdPoints}>213</td>
          </tr>
          <tr class={styles.trLoser}>
            <td class={styles.tdPoints}>2</td>
            <td class={styles.tdName}>
              <p className={styles.playerName}>Никита</p>&nbsp;<p>Дудка</p>
            </td>
            <td class={styles.tdPoints}>9</td>
            <td class={styles.tdPoints}>103</td>
            <td class={styles.tdPoints}>36</td>
            <td class={styles.tdPoints}>46</td>
            <td class={styles.tdPoints}>25</td>
            <td class={styles.tdPoints}>213</td>
            <td class={styles.tdPoints}>257</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SeasonTable2022;
