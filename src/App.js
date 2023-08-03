import React from 'react';
import Layout from './components/layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Categories from './components/pages/Categories/Categories';
import Services from './components/pages/Services/Services';
import ServiceDetail from './components/pages/Services/ServiceDetail/ServiceDetail';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Categories />} />
                    <Route path='services' element={<Services />}>
                        <Route path=':serviceId' element={<ServiceDetail />} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
