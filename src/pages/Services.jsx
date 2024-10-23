import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import FirstServiceBoxes from "../components/FirstServiceBoxes";
import loungebar from "../assets/loungebar.jpg";
import pool from "../assets/pool.jpg";
import playroom from "../assets/playroom.jpg";
import Footer from "../components/Footer";

const Services = () => {
	return (
		<div className='relative'>
			<div className='fixed top-0 left-0 w-full z-20'>
				<Navbar />
			</div>

			<div className='mt-36 justify-center text-center'>
				<h1 className='sm:text-6xl text-3xl font-bold'>Services</h1>
				<p className='mt-6'>
					<Link to='/Home'>
						<span className=''>Home</span>
					</Link>
					&gt; <span className='font-medium text-black'>Archives</span>
				</p>
			</div>

			{/* first 3 service boxes  */}
			<FirstServiceBoxes />

			{/* last three boxes */}
			<div className='mx-auto md:flex md:justify-center grid gap-6 mb-20'>
				{/* First Image */}
				<div className='w-96 h-96 mx-auto relative'>
					<img
						src={loungebar}
						alt='gym images'
						className='w-full h-full object-cover shadow-lg'
					/>
					<div className='absolute inset-0  bg-opacity-50 flex justify-center items-center translate-y-16'>
						<div className='w-64 h-16 bg-white text-black p-4 overflow-hidden transition-all duration-300 ease-in-out hover:h-56'>
							<p className='font-bold text-center'>lounge bar</p>

							<div className='pt-4 hover:block'>
								<p className='mt-2 text-black'>
									Image for cattle earth. May one Which life divide sea. Commodi
									soluta minima nemo,…
								</p>
								<button className='bg-blue-600 text-white p-2 w-48 mt-2 font-thin rounded-full text-sm self-start lg:self-start mb-6'>
									MORE ABOUT US
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Second Image */}
				<div className='w-96 h-96 mx-auto relative'>
					<img
						src={pool}
						alt='spa salon'
						className='w-full h-full object-cover shadow-lg'
					/>
					<div className='absolute inset-0  bg-opacity-50 flex justify-center items-center translate-y-16'>
						<div className='w-64 h-16 bg-white text-black text-center p-4 overflow-hidden transition-all duration-300 ease-in-out hover:h-56'>
							<p className='font-bold'>pool</p>

							<div className='pt-4 hover:block'>
								<p className='mt-2'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Voluptatibus, autem?
								</p>
								<button className='bg-blue-600 text-white p-2 w-48 mt-2 font-thin rounded-full text-sm self-start lg:self-start mb-6'>
									MORE ABOUT US
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Third Image */}
				<div className='w-96 h-96 mx-auto relative'>
					<img
						src={playroom}
						alt='summer terrace images'
						className='w-full h-full object-cover shadow-lg'
					/>
					<div className='absolute inset-0  bg-opacity-50 flex justify-center items-center translate-y-16 '>
						<div className='w-64 h-16 bg-white text-black text-center p-4 overflow-hidden transition-all duration-300 ease-in-out hover:h-56 '>
							<p className='font-bold'>play room</p>

							<div className='pt-4 hover:block  '>
								<p className='mt-4 '>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Unde, enim.
								</p>
								<button className='bg-blue-600 text-white p-2 w-48 mt-2 font-thin rounded-full text-sm self-start lg:self-start mb-6'>
									MORE ABOUT US
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Services;
