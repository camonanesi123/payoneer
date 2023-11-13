import React from 'react';
import Header from './header';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import App from '../../app';


const Layout = () => {
	return (
		<>
			<Header />
				<Outlet />
			<Footer />
		</>
	)
}

export default Layout;