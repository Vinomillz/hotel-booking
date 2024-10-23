import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BookingAccount = () => {
	return (
		<div className='relative'>
			<div className='fixed top-0 left-0 w-full z-20'>
				<Navbar />
			</div>

			<div className='mt-36 justify-center text-center'>
				<h1 className='sm:text-6xl text-3xl font-bold'>Booking Account</h1>
				<p className='text-sm text-[grey] w-4/5 md:w-3/5 mx-auto text-center  mb-10 mt-6'>
					Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit
					ea delectus, sed voluptatem. Laborum accusantium libero commodi id
					officiis itaque esse adipisci, necessitatibus asperiores, illo odio.
					<p className='mt-6'>
						<Link to='/Home'>
							<span className='font-bold'>Home </span>
						</Link>
						&gt; <span className='font-bold text-black'>Booking Account</span>
					</p>
				</p>
			</div>

			<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6'>
				{/* Input Container */}
				<div className='w-full max-w-screen-md space-y-4'>
					{/* First Input */}
					<input
						type='text'
						placeholder='Name'
						className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>

					{/* Second Input */}
					<input
						type='email'
						placeholder='Email'
						className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
				</div>

				{/* Submit Button */}
				<button className='mt-6 w-full max-w-screen-md px-6 py-3 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
					LOGIN
				</button>
			</div>

			<Footer />
		</div>
	);
};

export default BookingAccount;
