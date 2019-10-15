import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';
import * as rtl from '@testing-library/react';
import Navbar from './components/Navbar'
import useDarkMode from './hooks/useDarkMode.js'

it('App renders without crashing', () => {
	render(<App />);
});

it('Navbar renders without crashing', () => {
	render(<Navbar />);
});

it('useDarkMode renders without crashing', () => {
	render(<useDarkMode />)
})

it("renders players in app", () => {
	const app = rtl.render(<App />);
	app.getByText(/players/i);
});