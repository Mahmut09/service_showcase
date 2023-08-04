import React from 'react'
import { Link } from 'react-router-dom'

const ServicePlug = () => {
    return (
        <h3>
            По данной категории ещё нет сервисов, попробуйте оплатить позже.
            <Link style={{color: "#00C97B"}} to={'/'}> Назад к категориям</Link>
        </h3>
    )
}

export default ServicePlug