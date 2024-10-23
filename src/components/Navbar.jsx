import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

// Popup Component
const Popup = ({ onClose }) => {
	return (
		<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
			<div className='bg-white p-6 rounded-lg shadow-lg max-w-sm w-full'>
				<h2 className='text-xl font-semibold mb-4'>Booking Information</h2>
				<p>This is where you can add booking details </p>

				<input
					type='text'
					placeholder='Name '
					className='w-full p-3 border border-gray-300 rounded-lg shadow-sm'
				/>
				<input
					type='date'
					placeholder='Check-in Date '
					className='w-full p-3 border mt-2 border-gray-300 rounded-lg shadow-sm'
				/>
				<input
					type='date'
					placeholder='Check-out Date '
					className='w-full p-3 border mt-2 border-gray-300 rounded-lg shadow-sm'
				/>
				<button
					className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mx-2'
					type='submit'
				>
					submit
				</button>
				<button
					onClick={onClose}
					className='mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
				>
					Close
				</button>
			</div>
		</div>
	);
};

const Navbar = () => {
	const navLinks = [
		{ title: "Home", to: "/Home" },
		{ title: "Rooms", to: "/Rooms" },
		{ title: "About", to: "/About" },
		{ title: "Services", to: "/Services" },
		{ title: "Contact", to: "/Contact" },
		{ title: "Booking Account", to: "/BookingAccount" },
		{ title: "Book Now", to: "#" }, // "Book Now" link
	];

	const [isOpen, setIsOpen] = useState(false);
	const [isPopupVisible, setIsPopupVisible] = useState(false); // State for the popup

	// Function to handle the Book Now click
	const handleBookNowClick = (e) => {
		e.preventDefault(); // Prevent default link behavior
		setIsPopupVisible(true); // Show the popup
	};

	return (
		<div className='w-full mx-auto px-5 lg:px-10 bg-white '>
			<div className='flex justify-between items-center py-4 lg:py-6'>
				{/* Logo */}
				<Link to='/Home'>
					<img src={logo} alt='Logo' className='h-8 lg:h-12' />
				</Link>

				{/* Desktop Links */}
				<div className='hidden lg:flex justify-between w-full  px-10'>
					{navLinks.map((link, index) => (
						<a
							key={index}
							href={link.to === "#" ? undefined : link.to} // Prevent link for Book Now
							onClick={
								link.title === "Book Now" ? handleBookNowClick : undefined
							} // Handle Book Now click
							className={`text-sm font-medium hover:text-gray-900 transition duration-200 ${
								link.title === "Book Now"
									? "text-white bg-blue-600 px-4 py-2 rounded-full" // Specific style for "Book Now"
									: "text-gray-700"
							}`}
						>
							{link.title}
						</a>
					))}
				</div>

				{/* Mobile Hamburger Menu */}
				<div className='lg:hidden'>
					<button onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? (
							<IoCloseCircleOutline size='1.5rem' />
						) : (
							<GiHamburgerMenu size='1.5rem' />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Dropdown Menu */}
			{isOpen && (
				<div className='lg:hidden mt-2 space-y-4'>
					{navLinks.map((link, index) => (
						<a
							key={index}
							href={link.to === "#" ? undefined : link.to} // Prevent link for Book Now
							onClick={
								link.title === "Book Now" ? handleBookNowClick : undefined
							} // Handle Book Now click
							className={`block text-lg font-medium px-4 py-2 rounded-lg transition duration-200 ${
								link.title === "Book Now"
									? "text-white bg-blue-600 rounded-full"
									: "text-gray-700 bg-gray-200 hover:bg-gray-300"
							}`}
						>
							{link.title}
						</a>
					))}
				</div>
			)}

			{/* Render Popup if it's visible */}
			{isPopupVisible && <Popup onClose={() => setIsPopupVisible(false)} />}
		</div>
	);
};

export default Navbar;
