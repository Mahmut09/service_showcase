import React from 'react'
import Styles from './ServiceForm.module.scss';
import InputMask from 'react-input-mask';
import { type } from '@testing-library/user-event/dist/type';

const FormUI = ({ fields, handleSubmit, handleInputChange, inputValues }) => {
    return (
        <form className={Styles.form} onSubmit={handleSubmit}>
            {fields.map(item => (
                item.is_need_send ?
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
                                type={item.type === "amount" ? "number" : `${item.type}`}
                                name={item.name}
                                required
                                id={item.name}
                                onChange={handleInputChange}
                            />
                        }
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
    )
}

export default FormUI