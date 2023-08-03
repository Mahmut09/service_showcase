import React from 'react'
import successIcon from '../../../assets/images/check.png';
import Styles from './SuccessIcon.module.scss';

const SuccessIcon = () => {
    return (
        <div className={Styles.wrapper}>
            <img src={successIcon} className={Styles.icon} alt="Ok" />
            Спасибо
        </div>
    )
}

export default SuccessIcon