import React from 'react';
import Nav from '../shared/Nav';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../shared/Footer';

const Root = () => {
    const location = useLocation()
    console.log(location)
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signUp')
    return (
        <div>
           { noHeaderFooter || <Nav></Nav>}
            <Outlet></Outlet>
           { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;