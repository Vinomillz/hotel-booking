import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";
import room4 from "../assets/room4.jpg";
import { MdOutlineBedroomChild } from "react-icons/md";
import { PiBracketsSquareDuotone } from "react-icons/pi";
import { useState } from "react";
import GuestFeedback from "../components/GuestFeedback";

const Rooms = () => {
	// State to hold the selected room type
	const [selectedRoom, setSelectedRoom] = useState("All");

	// Function to handle button clicks
	const handleRoomFilter = (roomType) => {
		setSelectedRoom(roomType);
	};

	return (
		<>
			<div className='relative'>
				<div className='fixed top-0 left-0 w-full z-20'>
					<Navbar />
				</div>
				<div className='flex-col mt-44 justify-center'>
					<h2 className='text-4xl font-bold text-center'>Choose Your Room</h2>

					<p className='text-sm text-[grey] w-4/5 md:w-3/5 mx-auto text-center mb-10 mt-6'>
						Laborum accusantium libero commodi. Voluptate consequatur itaque
						expedita accusamus impedit perspiciatis asperiores necessitatibus
						assumenda magnam ipsa.
						<p className='mt-6'>
							<Link to='/Home'>
								<span className='font-bold'>Home</span>
							</Link>
							&gt; <span className='font-bold text-black'>Rooms</span>
						</p>
					</p>

					{/* Buttons Section */}
					<div className='flex justify-center text-center mb-6 mt-20'>
						<button
							className={`bg-blue-500 w-32 p-3 m-2 border text-white font-medium ${
								selectedRoom === "All" && "bg-blue-600"
							}`}
							onClick={() => handleRoomFilter("All")}
						>
							All Rooms
						</button>
						<button
							className={`w-32 p-3 m-2 border font-medium ${
								selectedRoom === "Economy" && "bg-blue-600 text-white"
							}`}
							onClick={() => handleRoomFilter("Economy")}
						>
							Economy
						</button>
						<button
							className={`w-32 p-3 m-2 border font-medium ${
								selectedRoom === "Luxe" && "bg-blue-600 text-white"
							}`}
							onClick={() => handleRoomFilter("Luxe")}
						>
							Luxe
						</button>
						<button
							className={`w-32 p-3 m-2 border font-medium ${
								selectedRoom === "Standard" && "bg-blue-600 text-white"
							}`}
							onClick={() => handleRoomFilter("Standard")}
						>
							Standard
						</button>
					</div>

					{/* Room Cards Section */}
					<div className='relative w-full'>
						<div className='flex flex-wrap justify-start lg:ml-20'>
							{/* Room 1: Classic Room (All or Standard Room) */}
							{(selectedRoom === "All" || selectedRoom === "Standard") && (
								<div className='sm:w-1/2 lg:w-80 xl:w-1/4 m-4'>
									<img src={room1} alt='Room 1' className='w-full' />
									<div className='flex items-center m-4'>
										<MdOutlineBedroomChild className='text-xl' />
										<span className='text-sm text-gray-500 ml-2 mr-4'>
											Adults: 3
										</span>
										<PiBracketsSquareDuotone className='text-xl' />
										<span className='text-sm text-gray-500 ml-2'>
											Size: 42ft
										</span>
									</div>
									<h2 className='text-2xl font-medium'>Classic Room</h2>
									<p className='text-gray-400'>Lorem ipsum dolor sit amet...</p>
									<div className='flex justify-between items-center'>
										<span className='text-xl text-green-500 font-medium'>
											$35
										</span>
										<Link to='/BookingAccount'>
											<button className='bg-blue-600 text-white p-2 w-36 mt-6 font-thin rounded-full text-sm'>
												Book
											</button>
										</Link>
									</div>
								</div>
							)}

							{/* Room 2: Business Class Room (All or Luxe Room) */}
							{(selectedRoom === "All" || selectedRoom === "Luxe") && (
								<div className='sm:w-1/2 lg:w-80 xl:w-1/4 m-4'>
									<img src={room2} alt='Room 2' className='w-full' />
									<div className='flex items-center m-4'>
										<MdOutlineBedroomChild className='text-xl' />
										<span className='text-sm text-gray-500 ml-2 mr-4'>
											Adults: 3
										</span>
										<PiBracketsSquareDuotone className='text-xl' />
										<span className='text-sm text-gray-500 ml-2'>
											Size: 42ft
										</span>
									</div>
									<h2 className='text-2xl font-medium'>Business Class Room</h2>
									<p className='text-gray-400'>Lorem ipsum dolor sit amet...</p>
									<div className='flex justify-between items-center'>
										<span className='text-xl text-green-500 font-medium'>
											$59
										</span>
										<Link to='/BookingAccount'>
											<button className='bg-blue-600 text-white p-2 w-36 mt-6 font-thin rounded-full text-sm'>
												Book
											</button>
										</Link>
									</div>
								</div>
							)}

							{/* Room 3: Economy Classic Room (All or Economy Room) */}
							{(selectedRoom === "All" || selectedRoom === "Economy") && (
								<div className='sm:w-1/2 lg:w-80 xl:w-1/4 m-4'>
									<img src={room3} alt='Room 3' className='w-full' />
									<div className='flex items-center m-4'>
										<MdOutlineBedroomChild className='text-xl' />
										<span className='text-sm text-gray-500 ml-2 mr-4'>
											Adults: 3
										</span>
										<PiBracketsSquareDuotone className='text-xl' />
										<span className='text-sm text-gray-500 ml-2'>
											Size: 42ft
										</span>
									</div>
									<h2 className='text-2xl font-medium'>Economy Classic Room</h2>
									<p className='text-gray-400'>Lorem ipsum dolor sit amet...</p>
									<div className='flex justify-between items-center'>
										<span className='text-xl text-green-500 font-medium'>
											$27
										</span>
										<Link to='/BookingAccount'>
											<button className='bg-blue-600 text-white p-2 w-36 mt-6 font-thin rounded-full text-sm'>
												Book
											</button>
										</Link>
									</div>
								</div>
							)}

							{/* Room 4: Royal Class Room (All or Standard Room) */}
							{(selectedRoom === "All" || selectedRoom === "Standard") && (
								<div className='sm:w-1/2 lg:w-80 xl:w-1/4 m-4'>
									<img src={room4} alt='Room 4' className='w-full' />
									<div className='flex items-center m-4'>
										<MdOutlineBedroomChild className='text-xl' />
										<span className='text-sm text-gray-500 ml-2 mr-4'>
											Adults: 3
										</span>
										<PiBracketsSquareDuotone className='text-xl' />
										<span className='text-sm text-gray-500 ml-2'>
											Size: 42ft
										</span>
									</div>
									<h2 className='text-2xl font-medium'>Royal Class Room</h2>
									<p className='text-gray-400'>Lorem ipsum dolor sit amet...</p>
									<div className='flex justify-between items-center'>
										<span className='text-xl text-green-500 font-medium'>
											$40
										</span>
										<Link to='/BookingAccount'>
											<button className='bg-blue-600 text-white p-2 w-36 mt-6 font-thin rounded-full text-sm'>
												Book
											</button>
										</Link>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>

				<GuestFeedback />

				<Footer />
			</div>
		</>
	);
};

export default Rooms;
