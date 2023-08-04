import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Styles from './Header.module.scss';
import Logo from '../../../assets/images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchServices } from '../../../store/toolkitSlice';
import { fetchData } from '../../../api/Api';
import HeaderUI from './HeaderUI';

const Header = () => {
    const dispatch = useDispatch();
    const [searchServiceName, setSearchServiceName] = useState("");
    const URL = useSelector(state => state.toolkit.URL);
    const navigate = useNavigate();

    const handleSearchServices = e => {
        e.preventDefault();
        const getSearchServices = async () => {
            try {
                const data = await fetchData(URL + `v1/service/search?name=${searchServiceName}`);
                dispatch(setSearchServices(data));
                navigate(`/services/${searchServiceName}`);
            } catch (error) {
                navigate(`/services/${searchServiceName}`);
            } finally {
                setSearchServiceName("");
            }
        }
        getSearchServices();
    }

    const handleChangeInput = e => {
        const value = e.target.value;
        setSearchServiceName(value);
    }

    return (
        <header className={Styles.header}>
            
            <Link to={"/"} className={Styles.logo}>
                <img src={Logo} alt="logo" />
            </Link>
            <HeaderUI 
                handleSearchServices={handleSearchServices}
                searchServiceName={searchServiceName}
                handleChangeInput={handleChangeInput}
            />
            
        </header>
    )
}

export default Header