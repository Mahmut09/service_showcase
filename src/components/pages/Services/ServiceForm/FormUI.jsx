import React from 'react'
import Styles from './ServiceForm.module.scss';
import InputMask from 'react-input-mask';

const FormUI = ({ fields, handleSubmit, handleInputChange, inputValues, errorMessages }) => {
    return (
        <form className={Styles.form} onSubmit={handleSubmit}>
            {fields.map(item => (
                <div key={item.id}>
                    {item.mask ?
                        <InputMask
                            mask={item.mask}
                            value={inputValues[item.name] || ""}
                            onChange={handleInputChange}
                            name={item.name}
                            required
                            id={item.name}
                        >
                            {(inputProps) => <input {...inputProps} type={item.type} />}
                        </InputMask>
                        :
                        <input
                            type={item.type}
                            name={item.name}
                            id={item.name}
                            onChange={handleInputChange}
                        />
                    }
                    {
                        <label htmlFor={item.name} className={inputValues[item.name] ? Styles.activeLabel : ''}>
                            {errorMessages[item.name] || item.title}
                        </label>
                    }
                </div>
            ))}
            <button>Отправить</button>
        </form>
    )
}


export default FormUI