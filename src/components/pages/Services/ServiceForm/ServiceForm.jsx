import React, { useState } from 'react'
import Styles from './ServiceForm.module.scss'

const ServiceForm = ({ handleFormOpen, name, serviceImage, fields }) => {
    const [inputValues, setInputValues] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    return (
        <div className={Styles.popupForm} onClick={handleFormOpen}>
            <div className={`${Styles.popupContent} popup-content`}>

                <button className={`${Styles.close} popup-close`}>&times;</button>
                <h3>
                    {name}
                    <img src={serviceImage} alt="#" />
                </h3>
                <form className={Styles.form}>
                    {fields.map(item => (
                        item.is_need_send ?
                            <div key={item.id}>
                                <input
                                    type={item.type}
                                    name={item.name}
                                    id={item.name}
                                    onChange={handleInputChange}
                                />
                                {
                                    inputValues[item.name] ?
                                        ""
                                        :
                                        <label htmlFor={item.name}>{item.title}</label>
                                }
                            </div>
                            :
                            ""
                    ))}
                    <button>Отправить</button>
                </form>

            </div>
        </div>
    )
}

export default ServiceForm