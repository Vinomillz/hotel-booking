import { Link } from "react-router-dom";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";
import room4 from "../assets/room4.jpg";

import { MdOutlineBedroomChild } from "react-icons/md";
import { PiBracketsSquareDuotone } from "react-icons/pi";

const OurBestRoomSlider = () => {
	return (
		<div className='relative m-5'>
			{/* Horizontal Scrollable Container */}
			<div
				id='scrollable-container'
				className='flex overflow-x-auto snap-x snap-mandatory w-full'
				style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
			>
				{/* First Room */}
				<div className='w-96 flex-shrink-0 m-4 snap-start'>
					<img src={room1} alt='Room 1' className='w-96' />
					<div className='flex items-center m-4'>
						<MdOutlineBedroomChild className='text-xl' />
						<span className='text-sm text-gray-500 ml-2 mr-4'>Adults: 3</span>
						<PiBracketsSquareDuotone className='text-xl' />
						<span className='text-sm text-gray-500 ml-2'>Size: 42ft</span>
					</div>
					<div>
						<h2 className='text-2xl font-medium'>Classic Room</h2>
						<p className='text-gray-400'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
							iste suscipit error at, nihil consequuntur!
						</p>
					</div>
					<div className='flex justify-between items-center'>
						<div className='flex items-center'>
							<span className='text-xl text-green-500 font-medium'>$35</span>
							<span className='ml-1 text-sm text-gray-500'>per night</span>
						</div>
						<Link to='/BookingAccount'>
							<button className='bg-blue-600 text-white p-2 w-36 mt-6 font-thin rounded-full text-sm'>
								Book
							</button>
						</Link>
					</div>
				</div>

				{/* Second Room */}
				<div className='w-96 flex-shrink-0 m-4 snap-start'>
					<img src={room2} alt='Room 2' className='w-96' />
					<div className='flex items-center m-4'>
						<MdOutlineBedroomChild className='text-xl' />
						<span className='text-sm text-gray-500 ml-2 mr-4'>Adults: 2</span>
						<PiBracketsSquareDuotone className='text-xl' />
						<span className='text-sm text-gray-500 ml-2'>Size: 35ft</span>
					</div>
					<div>
						<h2 className='text-2xl font-medium'>Business Class Room</h2>
						<p className='text-gray-400'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
							iste suscipit error at, nihil consequuntur!
						</p>
					</div>
					<div className='flex justify-between items-center'>
						<div className='flex items-center'>
							<span className='text-xl text-green-500 font-medium'>$59</span>
							<span className='ml-1 text-sm text-gray-500'>per night</span>
						</div>
						<Link to='/BookingAccount'>
							<button className='bg-blue-600 text-white p-2 w-36 mt-6 font-thin rounded-full text-sm'>
								Book
							</button>
						</Link>
					</div>
				</div>

				{/* third room  */}
				<div className='w-96 flex-shrink-0 m-4 snap-start'>
					<img src={room3} alt='Room 2' className='w-96' />
					<div className='flex items-center m-4'>
						<MdOutlineBedroomChild className='text-xl' />
						<span className='text-sm text-gray-500 ml-2 mr-4'>Adults: 2</span>
						<PiBracketsSquareDuotone className='text-xl' />
						<span className='text-sm text-gray-500 ml-2'>Size: 25ft</span>
					</div>
					<div>
						<h2 className='text-2xl font-medium'>Economy Classic Room</h2>
						<p className='text-gray-400'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
							iste suscipit error at, nihil consequuntur!
						</p>
					</div>
					<div className='flex justify-between items-center'>
						<div className='flex items-center'>
							<span className='text-xl text-green-500 font-medium'>$27</span>
							<span className='ml-1 text-sm text-gray-500'>per night</span>
						</div>
						<Link to='/BookingAccount'>
							<button className='bg-blue-600 text-white p-2 w-36 mt-6 font-thin rounded-full text-sm'>
								Book
							</button>
						</Link>
					</div>
				</div>

				{/* fourth room */}
				<div className='w-96 flex-shrink-0 m-4 snap-start'>
					<img src={room4} alt='Room 2' className='w-96' />
					<div className='flex items-center m-4'>
						<MdOutlineBedroomChild className='text-xl' />
						<span className='text-sm text-gray-500 ml-2 mr-4'>Adults: 2</span>
						<PiBracketsSquareDuotone className='text-xl' />
						<span className='text-sm text-gray-500 ml-2'>Size: 45ft</span>
					</div>
					<div>
						<h2 className='text-2xl font-medium'>Royal Class Room</h2>
						<p className='text-gray-400'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
							iste suscipit error at, nihil consequuntur!
						</p>
					</div>
					<div className='flex justify-between items-center'>
						<div className='flex items-center'>
							<span className='text-xl text-green-500 font-medium'>$27</span>
							<span className='ml-1 text-sm text-gray-500'>per night</span>
						</div>
						<Link to='/BookingAccount'>
							<button className='bg-blue-600 text-white p-2 w-36 mt-6 font-thin rounded-full text-sm'>
								Book
							</button>
						</Link>
					</div>
				</div>
			</div>

			{/* Left Arrow Button */}
			<button
				onClick={() =>
					document
						.getElementById("scrollable-container")
						.scrollBy({ left: -350, behavior: "smooth" })
				}
				className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full'
			>
				←
			</button>

			{/* Right Arrow Button */}
			<button
				onClick={() =>
					document
						.getElementById("scrollable-container")
						.scrollBy({ left: 350, behavior: "smooth" })
				}
				className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full'
			>
				→
			</button>
		</div>
	);
};

export default OurBestRoomSlider;
