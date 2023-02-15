import React from 'react'
import { Link } from 'react-router-dom';
import scheduleMobPhoto from '../../../assets/img/GoldenBallMob.jpg'
import schedulePcPhoto from '../../../assets/img/GoldenBallPc.jpg'
import styles from '../Schedule/Schedule.module.scss'

function Schedule() {
    return (
        <Link to='/results'><div className={styles.schedulePhotoBlock}>
            <img className={styles.schedulePcPhoto} src={schedulePcPhoto} alt='' ></img>
            <img className={styles.scheduleMobPhoto} src={scheduleMobPhoto} alt='' ></img>
            <p className={styles.scheduleText}>Расписание ближайших каток</p>
        </div></Link>
    )
}

export default Schedule
