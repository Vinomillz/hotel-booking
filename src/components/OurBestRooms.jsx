// import OurBestRoomSlider from "./OurBestRoomSlider";

import { Link } from "react-router-dom";
import OurBestRoomSlider from "./OurBestRoomSlider";

const OurBestRooms = () => {
	return (
		<>
			<div className='flex flex-col items-center text-center mt-24 w-full'>
				<h2 className='text-3xl font-bold mb-4'>Our Best Rooms</h2>

				<span className='w-4/5 md:w-3/5 text-center text-sm text-[grey]'>
					Our rooms are thoughtfully designed with your comfort in mind,
					featuring comfortable bedding, modern amenities, and plenty of space
					to relax and recharge.
				</span>

				<Link to='/Rooms'>
					<button className='bg-blue-600 text-white p-2 w-48 mt-6 font-thin rounded-full text-sm 1 mb-6'>
						ALL ROOMS
					</button>
				</Link>
			</div>

			<OurBestRoomSlider />
		</>
	);
};

export default OurBestRooms;
