import React, { useState } from 'react'
import NoImage from '../../../../assets/images/no-image.png';
import Styles from './ServiceCard.module.scss';
import ServiceForm from '../ServiceForm/ServiceForm';

const ServiceCard = ({ name, pictureUrl, fields }) => {
    const [formIsOpen, setFormIsOpen] = useState(false);
    const serviceImage = pictureUrl ? pictureUrl : NoImage;

    const handleFormOpen = e => {
        const target = e.target;
        if (!target.closest(".popup-content") || target.closest(".popup-close")) {
            setFormIsOpen(!formIsOpen);
        }
    }
    
    return (
        <>
            <div className={Styles.card} onClick={handleFormOpen}>
                {name}
                <img src={serviceImage} alt="service-img" />

            </div>
            {
                formIsOpen &&
                < ServiceForm
                    handleFormOpen={handleFormOpen}
                    serviceImage={serviceImage}
                    name={name}
                    fields={fields}
                />
            }
        </>
    )
}

export default ServiceCard