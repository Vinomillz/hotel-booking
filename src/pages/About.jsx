import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import bentfacerRbg from "../assets/bentfaceRbg.png";
import AirportTransfer from "../assets/AirportTransfer.png";
import UnderProtection from "../assets/UnderProtection.png";
import AllInclusive from "../assets/AllInclusive.png";
import AirConditioned from "../assets/AirConditioned.png";
import privatePools from "../assets/privatePools.png";
import freewifi from "../assets/freewifi.png";
import smarttv from "../assets/smarttv.png";
import laundry from "../assets/laundry.png";
import { FaCirclePlay, FaLinkedinIn } from "react-icons/fa6";
import youtubewatch from "../assets/youtubewatch.jpg";
import Akube from "../assets/Akube.jpg";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import GuestFeedback from "../components/GuestFeedback";
import FirstServiceBoxes from "../components/FirstServiceBoxes";
import Services from "./Services";
import bentface from "../assets/bentface.jpeg";

const About = () => {
	return (
		<>
			<div className='relative overflow-hidden'>
				<div className='fixed top-0 left-0 w-full z-20'>
					<Navbar />
				</div>

				<div className='mt-36 justify-center text-center  '>
					<h1 className='sm:text-6xl text-3xl font-bold'>About our Hotel</h1>

					<p className='text-sm text-[grey] w-4/5 md:w-3/5 mx-auto text-center mb-10 mt-6'>
						Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
						fugit ea delectus, sed voluptatem. Laborum accusantium libero
						commodi id officiis itaque esse adipisci, necessitatibus asperiores,
						illo odio.
						<p className='mt-6'>
							<Link to='/Home'>
								<span className='font-bold'>Home</span>
							</Link>
							&gt; <span className='font-bold text-black'>About</span>
						</p>
					</p>
				</div>

				<div className='flex flex-col md:flex-row items-center justify-center p-4  border m-4'>
					{/* Image Section */}
					<div className=' md:w-1/2'>
						<img
							src={bentfacerRbg}
							alt='Sample'
							className='rounded-full w-72 h-72  sm:w-64 sm:h-64 lg:w-60   md:w-1/2  '
						/>
					</div>

					{/* Text Section */}
					<div className='mt-4 md:mt-0 '>
						<p className='text-lg text-[grey] font-thin '>
							Everyone would like to be treated like at home in the hotel, and
							at home - like in a hotel. Hospitality is a quality that is made
							up of primeval simplicity and antique grandeur.
						</p>

						<p className='font-bold pt-4 '>Umezinwa Vincent</p>
						<span className='font-thin text-gray-500'>Top Manager </span>
					</div>
				</div>

				<div className='mt-20 justify-center text-center  '>
					<p className='sm:text-5xl text-3xl font-bold'>What We Offer</p>

					<p className='text-sm text-[grey] w-3/5 md:w-3/5 mx-auto text-center mb-10 mt-6'>
						Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
						fugit ea delectus, sed voluptatem. Laborum accusantium libero
						commodi id officiis itaque esse adipisci, necessitatibus asperiores,
						illo odio.
					</p>
					<Link to='/Services'>
						<button className='bg-blue-600 text-white p-2 w-36  font-medium rounded-full text-sm self-start lg:self-start mb-6 '>
							SERVICES
						</button>
					</Link>
				</div>

				<div className='max-w-6xl mx-auto bg-gray-100'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
						<div className='h-32 pt-3  lg:h-36 flex flex-col items-center text-sm lg:text-base'>
							<img
								className='h-8 mx-2 justify-center '
								src={AirportTransfer}
								alt=''
							/>
							<p className='px-4 text-black text-md'>Airport Transfer</p>
						</div>

						<div className='h-32 pt-3  lg:h-36 flex flex-col items-center text-sm lg:text-base'>
							<img className='h-8' src={AllInclusive} alt='' />
							<span className='text-black text-md mt-2'>All Inclusive</span>
						</div>

						<div className='h-32 pt-3  lg:h-36 flex flex-col items-center text-sm lg:text-base'>
							<img className='h-8  mx-auto' src={AirConditioned} alt='' />
							<span className='  text-black '>Air Conditioned</span>
						</div>

						<div className='h-32 pt-3  lg:h-36 flex flex-col items-center text-sm lg:text-base'>
							<img className='h-8 mx-2' src={UnderProtection} alt='' />
							<p className='px-4 text-black text-md'>Under Protection</p>
						</div>
						<div className='h-32 pt-3  lg:h-36 flex flex-col items-center text-sm lg:text-base'>
							<img className='h-8 mx-2' src={privatePools} alt='' />
							<p className='px-4 text-black text-md'>private Pools</p>
						</div>
						<div className='h-32 pt-3  lg:h-36 flex flex-col items-center text-sm lg:text-base'>
							<img className='h-8 mx-2' src={freewifi} alt='' />
							<p className='px-4 text-black text-md'>free wifi</p>
						</div>
						<div className='h-32 pt-3  lg:h-36 flex flex-col items-center text-sm lg:text-base'>
							<img className='h-8 mx-2' src={smarttv} alt='' />
							<p className='px-4 text-black text-md'>Smart tv</p>
						</div>
						<div className='h-32 pt-3  lg:h-36 flex flex-col items-center text-sm lg:text-base'>
							<img className='h-8 mx-2' src={laundry} alt='' />
							<p className='px-4 text-black text-md'>laundry</p>
						</div>
					</div>
				</div>

				<div className='flex flex-col lg:flex-row items-center lg:items-center justify-between px-6 mt-40 '>
					{/* Text Section 2 */}
					<div className='w-full lg:w-1/2 lg:mt-0   lg:flex lg:flex-col lg:items-center lg:text-center '>
						<h2 className='text-3xl font-bold mb-4 sm:w-full'>
							Start your Amazing Adventure!
						</h2>
						<p className='text-sm lg:text-lg text-gray-700 font-thin text-left '>
							Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
							fugit ea delectus, sed voluptatem. Laborum accusantium libero
							commodi id officiis itaque esse adipisci, necessitatibus
							asperiores, illo odio.
						</p>

						<a href='https://www.youtube.com/watch?v=wsq-r8lMMsk'>
							<button className='bg-blue-600 text-white p-2 w-48 mt-6 font-thin rounded-full text-sm self-start lg:self-start mb-6 flex items-center justify-center gap-2'>
								<FaCirclePlay />
								WATCH VIDEO
							</button>
						</a>
					</div>
					{/* Image Section */}
					<div className='w-full lg:w-1/2'>
						<img
							src={youtubewatch}
							alt='Example'
							className='w-full object-cover overflow-hidden h-96 lg:h-screen'
						/>
					</div>
				</div>

				<div className='mt-36 justify-center text-center  '>
					<h1 className='sm:text-4xl text-3xl font-bold'>Our Awesome Team</h1>

					<p className='text-sm text-[grey] w-4/5 md:w-3/5 mx-auto text-center mb-10 mt-6'>
						Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
						fugit ea delectus, sed voluptatem. Laborum accusantium libero
						commodi id officiis itaque esse adipisci, necessitatibus asperiores,
						illo odio.
					</p>
				</div>

				<div className='flex flex-col items-center justify-center border border-gray-300 rounded-lg w-4/5 lg:w-3/5 mx-auto p-6 bg-white shadow-lg'>
					<img src={Akube} alt='' className='w-64 sm:w-64 lg:w-60 md:w-1/2 ' />

					<p className='mt-4 text-3xl font-semibold text-gray-800'>
						Umezinwa Vincent
					</p>

					<span className='font-light text-gray-500 text-base mt-2'>
						Software Engineer
					</span>

					<span className='flex'>
						<a
							href='https://x.com/Vinomillz_'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaXTwitter className='text-2xl cursor-pointer m-3 ' />
						</a>

						<a
							href='https://www.linkedin.com/in/vincent-umezinwa-772678249/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaLinkedinIn className='text-2xl m-3 cursor-pointer' />
						</a>

						<a
							href='https://github.com/Vinomillz/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<IoLogoGithub className='text-2xl cursor-pointer m-3' />
						</a>
					</span>
				</div>

				<div className='flex flex-col items-center text-center mt-32 w-full'>
					<h2 className='text-3xl font-bold mb-4'>Our Services</h2>

					<span className='w-4/5 md:w-3/5 text-center text-sm text-[grey]'>
						Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
						fugit ea delectus, sed voluptatem. Laborum accusantium libero
						commodi id officiis itaque esse adipisci, necessitatibus asperiores,
						illo odio.
					</span>
					<Link to='/Services'>
						<button className='bg-blue-600 text-white p-2 w-36  font-medium rounded-full text-sm self-start lg:self-start mt-4 '>
							SERVICES
						</button>
					</Link>

					<FirstServiceBoxes />
				</div>

				<GuestFeedback />

				<Footer />
			</div>
		</>
	);
};

export default About;
