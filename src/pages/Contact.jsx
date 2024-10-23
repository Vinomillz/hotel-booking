import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import welcome from "../assets/welcome.png";
import write from "../assets/write.png";
import call from "../assets/call.png";
import Footer from "../components/Footer";

const Contact = () => {
	return (
		<div className='relative'>
			<div className='fixed top-0 left-0 w-full z-20'>
				<Navbar />
			</div>

			<div className='mt-36 justify-center text-center  '>
				<h1 className='sm:text-6xl text-3xl font-bold'>Get In Touch</h1>

				<p className='text-sm text-[grey] w-4/5 md:w-3/5 mx-auto text-center  mb-10 mt-6'>
					Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit
					ea delectus, sed voluptatem. Laborum accusantium libero commodi id
					officiis itaque esse adipisci, necessitatibus asperiores, illo odio.
					<p className='mt-6'>
						<Link to='/Home'>
							<span className='font-bold'>Home </span>
						</Link>
						&gt; <span className='font-bold text-black'>Contact</span>
					</p>
				</p>

				<div className='flex justify-center text-center bg-gray-100 py-8 px-6'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg'>
						{/* 1st div */}
						<div className='h-36 flex flex-col items-center justify-center space-y-2 bg-white shadow-lg rounded-lg p-4 w-80 mx-auto'>
							<img className='h-12' src={welcome} alt='Air Conditioned' />
							<span className='text-black font-semibold'>Welcome</span>
							<span className='text-gray-500 font-thin'>
								Santo Domingo 9479 Magarto st.
							</span>
						</div>

						{/* 2nd div */}
						<div className='h-36 flex flex-col items-center justify-center space-y-2 bg-white shadow-lg rounded-lg p-4 w-80 mx-auto'>
							<img className='h-12' src={call} alt='Under Protection' />
							<p className='text-black font-semibold'>Call</p>

							<span className='text-gray-500 font-thin'>+234 70 3002 6897</span>
						</div>

						{/* 3rd div */}
						<div className='h-36 flex flex-col items-center justify-center space-y-2 bg-white shadow-lg rounded-lg p-4 w-80 mx-auto'>
							<img className='h-12' src={write} alt='Private Pools' />
							<p className='text-black font-semibold'>Write</p>
							<span className='text-gray-500 font-thin'>
								umezvincent20@gmail.com
							</span>
						</div>
					</div>
				</div>
				<h1 className='font-bold text-2xl md:text-4xl '>
					Vincent is waiting for you!
				</h1>
				<p className='text-sm text-[grey] w-4/5 md:w-3/5 mx-auto text-center  mb-10 mt-6'>
					Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit
					ea delectus, sed voluptatem. Laborum accusantium libero commodi id
					officiis itaque esse adipisci, necessitatibus asperiores, illo odio.
				</p>

				<Link to='/About'>
					<button className='bg-blue-600 text-white p-2 w-36  font-medium rounded-full text-sm self-start lg:self-start mb-6 '>
						MORE ABOUT US
					</button>
				</Link>
			</div>

			<div className='flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 w-full mx-auto max-w-screen-md  py-8'>
				{/* First Input */}
				<input
					type='text'
					placeholder='Name '
					className='w-full lg:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm'
				/>

				{/* Second Input */}
				<input
					type='email'
					placeholder='Email'
					className='w-full  lg:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm'
				/>
			</div>
			<input
				type='text'
				className=' flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 h-80 w-full mx-auto  lg:w-3/5 p-24 mb-6  border'
				id=''
			/>

			<Footer />
		</div>
	);
};

export default Contact;
