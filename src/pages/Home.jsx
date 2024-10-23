import Navbar from "../components/Navbar";
import imageAnimated from "../assets/imageAnimated.jpg";
import { FaStar } from "react-icons/fa";
import AirConditioned from "../assets/AirConditioned.png";
import AllInclusive from "../assets/AllInclusive.png";
import AirportTransfer from "../assets/AirportTransfer.png";
import UnderProtection from "../assets/UnderProtection.png";
import ExampleImage from "../assets/17yrsimg.jpg";
import AmazingImg from "../assets/amazingImg.png";
import OurBestRooms from "../components/OurBestRooms";
import GuestFeedback from "../components/GuestFeedback";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className='relative'>
			{/* Navbar */}
			<div className='fixed top-0 left-0 w-full z-20'>
				<Navbar />
			</div>

			{/* Image Section */}
			<div className='relative'>
				<div className='overflow-hidden'>
					<img
						src={imageAnimated}
						alt=''
						className='w-full h-screen object-cover animate-zoom-loop'
					/>
				</div>

				{/* Black Overlay (for the image only) */}
				<div className='absolute inset-0 bg-black bg-opacity-50'></div>

				{/* Text Overlay */}
				<div className='absolute inset-0 flex flex-col justify-center text-left text-white'>
					{/* Star Box */}
					<div className='flex justify-center items-center w-28 h-6 rounded-xl border border-gray-400 mx-6 bg-black bg-opacity-50'>
						{[...Array(5)].map((_, index) => (
							<FaStar key={index} className='text-yellow-500 text-1xl mx-1' />
						))}
					</div>

					<h1 className='text-2xl lg:text-4xl font-medium mb-4 mx-6'>
						Travel Maverick: Your Gateway to Adventurous Hotel Bookings!
					</h1>
					<p className='font-thin mx-6'>
						Book with Travel Maverick and explore the world like a true
						maverick!
					</p>

					{/* Four Boxes */}
					<div className='absolute w-full px-6 grid grid-cols-2 gap-4 lg:grid-cols-4 md:grid-cols-4 bottom-[-180px] lg:bottom-[-50px] '>
						{/* Box 1 */}
						<div className='h-32 relative lg:h-36 flex justify-center items-center text-sm lg:text-base bg-gray-200 text-black font-medium'>
							<img
								className="className=' h-8 justify-center items-center mx-2 "
								src={AirConditioned}
								alt=''
							/>

							<p className='px-4'>Air Conditioned</p>
						</div>

						{/* Box 2 */}
						<div className='h-32 bg-gray-200 relative lg:h-36 flex  items-center text-sm lg:text-base text-black font-medium'>
							<img
								className="className=' h-8 mx-2 "
								src={AllInclusive}
								alt=''
							/>

							<p className='px-4'>All Inclusive</p>
						</div>

						{/* Box 3 */}
						<div className='h-32 bg-gray-200 relative lg:h-36 flex  items-center text-sm lg:text-base font-medium'>
							<img
								className="className=' h-8 mx-2 "
								src={AirportTransfer}
								alt=''
							/>

							<p className='px-4 text-black text-md'>Airport Transfer</p>
						</div>

						{/* Box 4 */}
						<div className='h-32 bg-gray-200  lg:h-36 flex  items-center text-sm lg:text-base'>
							<img
								className="className=' h-8 mx-2 "
								src={UnderProtection}
								alt=''
							/>

							<p className='px-4 text-black text-md font-medium'>
								UnderProtection
							</p>
						</div>
					</div>
				</div>
			</div>

			<br />
			<div className='flex flex-col lg:flex-row items-center lg:items-center justify-between lg:pl-8  pt-6 mt-36 ml-4 lg:ml-0'>
				{/* Image Section */}
				<div className='w-full lg:w-1/2 mr-4   lg:mr-0   '>
					<img
						src={ExampleImage}
						alt='Example'
						className='w-full object-cover h-96 lg:h-screen '
					/>
				</div>

				{/* Text Section */}
				<div className='w-full lg:w-1/2   lg:mt-0 lg:ml-8 lg:flex lg:flex-col lg:items-center lg:text-center '>
					<h2 className='text-4xl font-bold mb-4 sm:w-full'>
						We have 17+ years of Experience
					</h2>
					<p className='text-sm font-thin  md:font-medium lg:text-sm text-gray-700 text-left'>
						For over 17 years, our hotel has been providing guests with
						exceptional hospitality and comfortable accommodation. With a focus
						on luxury and convenience, we have established ourselves as a
						premier destination for travelers seeking a memorable and relaxing
						experience.
					</p>

					<Link to='/About'>
						<button className='bg-blue-600 text-white p-2 w-48 mt-6 font-thin rounded-full text-sm self-start lg:self-start mb-6'>
							MORE ABOUT US
						</button>
					</Link>
				</div>
			</div>

			<div className='flex flex-col lg:flex-row items-center lg:items-center justify-between px-6 '>
				{/* Text Section 2 */}
				<div className='w-full lg:w-1/2 lg:mt-0   lg:flex lg:flex-col lg:items-center lg:text-center '>
					<h2 className='text-4xl font-bold mb-4 sm:w-full'>
						Start your Amazing Adventure!
					</h2>
					<p className='text-sm font-thin  md:font-medium lg:text-sm text-gray-700 text-left '>
						We have honed our skills in providing guests with the ultimate
						accommodation experience. Our guests can expect to be greeted with
						warm hospitality, and to stay in beautifully designed rooms equipped
						with all the amenities they need.
					</p>

					<Link to='/Rooms'>
						<button className='bg-blue-600 text-white p-2 w-48 mt-6 font-thin rounded-full text-sm self-start lg:self-start mb-6 '>
							CHOOSE A ROOM
						</button>
					</Link>
				</div>
				{/* Image Section */}
				<div className='w-full lg:w-1/2'>
					<img
						src={AmazingImg}
						alt='Example'
						className='w-full object-cover h-96 lg:h-screen'
					/>
				</div>
			</div>

			<OurBestRooms />

			<GuestFeedback />

			<Footer />
		</div>
	);
};

export default Home;
