import React, { useState } from 'react'
import Styles from './ServiceForm.module.scss';
import { postData } from '../../../../api/Api';
import { useSelector } from 'react-redux';
import FormUI from './FormUI';
import SuccessIcon from '../../../UI/successIcon/SuccessIcon';
import ErrorIcon from '../../../UI/errorIcon/ErrorIcon';

const ServiceForm = ({ handleFormOpen, name, serviceImage, fields }) => {
    const [inputValues, setInputValues] = useState({});
    const [errorMessages, setErrorMessages] = useState({});
    const [status, setStatus] = useState(null);
    const URL = useSelector(state => state.toolkit.URL); // https://jsonplaceholder.typicode.com/posts


    const validateFields = () => {
        let isValid = true;
        for (const field of fields) {
            const returnFieldName = () => setTimeout(() => setErrorMessages(prev => ({ ...prev, [field.name]: '' })), 2000);

            if (field.hidden || !field.is_need_send) continue;

            const value = inputValues[field.name];

            // сумма
            if (field.name === 'amount' && !/^\d+(\.\d{1,2})?$/.test(value)) {
                setErrorMessages(prev => ({
                    ...prev,
                    [field.name]: `Не верно введено поле сумма`
                }));
                returnFieldName();
                isValid = false;
            }

            // почта
            if ((field.name === 'account' || field.name === 'email') && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
                setErrorMessages(prev => ({
                    ...prev,
                    [field.name]: `Почта введена не вернор`
                }));
                returnFieldName();
                isValid = false;
            }

            // номер телефона
            if (field.title === 'Телефон' && !/^\+?\d{10,15}$/.test(value)) {
                setErrorMessages(prev => ({
                    ...prev,
                    [field.name]: `Номер телефона введен не верно`
                }));
                returnFieldName();
                isValid = false;
            }

            // дата рождения
            if (field.name === 'birthDate' && !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
                setErrorMessages(prev => ({
                    ...prev,
                    [field.name]: `Дата рождения введена не верно`
                }));
                returnFieldName();
                isValid = false;
            }

            // пустое поле
            if (value == null || value.trim() === '') {
                setErrorMessages(prev => ({
                    ...prev,
                    [field.name]: `Поле не может быть пустым`
                }));
                returnFieldName();
                isValid = false;
            }
        }

        return isValid;
    };


    const handleInputChange = e => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!validateFields()) return;


        try {
            await postData(URL + "api/POST", inputValues);
            setStatus("success");
        } catch (error) {
            setStatus("error");
        }
    };

    const visibleFields = fields.filter(field => !field.hidden && field.is_need_send);

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
                        fields={visibleFields}
                        handleSubmit={handleSubmit}
                        handleInputChange={handleInputChange}
                        inputValues={inputValues}
                        errorMessages={errorMessages}
                    />
                }

                {status === 'success' && <SuccessIcon />}
                {status === 'error' && <ErrorIcon />}
            </div>
        </div>
    )
}

export default ServiceForm