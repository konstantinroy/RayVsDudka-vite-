import React from 'react'
import { Link } from 'react-router-dom';
import audioMobPhoto from '../../../assets/img/AudioMobPhoto.jpg'
import audioPcPhoto from '../../../assets/img/AudioPcPhoto.jpg'
import styles from '../Audio/Audio.module.scss'

function Audio() {
    return (
        <Link to='/audio'><div className={styles.audioPhotoBlock}>
            <img className={styles.audioPcPhoto} src={audioPcPhoto} alt='' ></img>
            <img className={styles.audioMobPhoto} src={audioMobPhoto} alt='' ></img>
            <p className={styles.audioText}>Все аудио 
            в одном 
            месте</p>
        </div></Link>
    )
}

export default Audio
