import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import App from './app';
import "./index.scss";
import Header from './components/layout/header';
import Footer from './components/layout/footer';

createRoot(document.getElementById("root") as HTMLElement).render(
	<BrowserRouter>
		<Header />
			<App />
		<Footer />
	</BrowserRouter>
);