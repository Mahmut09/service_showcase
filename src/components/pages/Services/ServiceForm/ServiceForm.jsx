import React, { useState } from 'react'
import Styles from './ServiceForm.module.scss';
import { postData } from '../../../../api/Api';
import { useSelector } from 'react-redux';
import FormUI from './FormUI';
import SuccessIcon from '../../../UI/successIcon/SuccessIcon';
import ErrorIcon from '../../../UI/errorIcon/ErrorIcon';

const ServiceForm = ({ handleFormOpen, name, serviceImage, fields }) => {
    const [inputValues, setInputValues] = useState({});
    const [status, setStatus] = useState(null);
    const URL = useSelector(state => state.toolkit.URL); // https://jsonplaceholder.typicode.com/posts

    const handleInputChange = e => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await postData(URL + "api/POST", inputValues);
            setStatus("success");
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div className={Styles.popupForm} onClick={handleFormOpen}>
            <div className={`${Styles.popupContent} popup-content`}>

                <button className={`${Styles.close} popup-close`}>&times;</button>
                <h3>
                    {name}
                    <img src={serviceImage} alt="#" />
                </h3>

                {
                    status === null &&
                    <FormUI 
                        fields={fields}
                        handleSubmit={handleSubmit}
                        handleInputChange={handleInputChange}
                        inputValues={inputValues}
                    />
                }

                {status === 'success' && <SuccessIcon />}
                {status === 'error' && <ErrorIcon />}
            </div>
        </div>
    )
}

export default ServiceForm

/*
        - Отправка данных
        - Баннер
        - Вынести инпуты в миксин
        - Split Названий 
        - Обработать ошибки
        - Маска
        
    - Валидация
    - Поиск 
    - Футер

*/