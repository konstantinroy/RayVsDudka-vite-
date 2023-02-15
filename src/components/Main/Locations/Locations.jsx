import React from 'react'
import { Link } from 'react-router-dom';
import locationsMobPhoto from '../../../assets/img/photo_2022-05-29_02-10-22(Mob).jpg'
import locationsPcPhoto from '../../../assets/img/photo_2022-05-29_02-10-22.jpg'
import styles from '../Locations/Locations.module.scss'

function Locations() {
    return (
        <Link to='/locations'><div className={styles.locationsPhotoBlock} >
            <img className={styles.locationsPcPhoto} src={locationsPcPhoto} alt='' ></img>
            <img className={styles.locationsMobPhoto} src={locationsMobPhoto} alt='' ></img>
            <p className={styles.locationsText}>Места проведения каток</p>
        </div></Link>
    )
}

export default Locations
