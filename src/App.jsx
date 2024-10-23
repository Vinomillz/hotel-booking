import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import BookingAccount from "./pages/BookingAccount";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index path='/' element={<Home />} />

					<Route index path='/Home' element={<Home />} />
					<Route index path='/Rooms' element={<Rooms />} />
					<Route index path='/About' element={<About />} />
					<Route index path='/Services' element={<Services />} />
					<Route index path='/Contact' element={<Contact />} />
					<Route index path='/BookingAccount' element={<BookingAccount />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
