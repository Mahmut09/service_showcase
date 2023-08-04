import React from 'react';
import Layout from './components/layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Categories from './components/pages/Categories/Categories';
import Services from './components/pages/Services/Services';
import ServiceDetail from './components/pages/Services/ServiceDetail/ServiceDetail';
import Help from './components/pages/help/Help';
import Blog from './components/pages/blog/Blog';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Categories />} />
                    <Route path='services' element={<Services />}>
                        <Route path=':serviceId' element={<ServiceDetail />} />
                        <Route path=':serviceName' element={<ServiceDetail />} />
                    </Route>
                    <Route path='help-page' element={<Help />}/>
                    <Route path='blog' element={<Blog />}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
