import face1 from "../assets/face1.jpg";
import face2 from "../assets/face2.jpg";
import face3 from "../assets/face3.jpg";
import face4 from "../assets/face4.jpg";
import { FaStar } from "react-icons/fa";

const GuestFeedbackSlider = () => {
	return (
		<div className='mt-16'>
			<div className='relative m-5'>
				{/* Horizontal Scrollable Container */}
				<div
					id='scrollable-containers'
					className='flex overflow-x-hidden snap-x snap-mandatory w-full'
					style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
				>
					{/* First guest */}
					<div className='w-96 flex-shrink-0 m-4 flex flex-col justify-center items-center snap-start'>
						<img
							src={face2}
							alt='first Guest'
							className='block w-20 rounded-full'
						/>
						<h2 className='text-xl font-medium mt-4'>Emma Trueman</h2>
						<span className='w-4/5 md:w-3/5 text-center text-sm text-[grey]'>
							from Poland
						</span>

						<div className='mt-6 text-center border rounded-lg p-4'>
							<div className='flex justify-center items-center w-28 h-6 rounded-xl mx-auto mb-2'>
								{[...Array(5)].map((_, index) => (
									<FaStar
										key={index}
										className='text-yellow-500 text-1xl mx-1'
									/>
								))}
							</div>

							<span className='w-4/5 md:w-3/5 text-center text-sm text-[grey] '>
								I have stayed at this hotel several times, and every visit has
								been better than the last. The rooms are always clean and
								comfortable, and the staff goes above and beyond to make sure
								that my stay is perfect. .
							</span>
						</div>
					</div>

					{/* Second Room */}
					<div className='w-96 flex-shrink-0 m-4 flex flex-col justify-center items-center snap-start'>
						<img
							src={face1}
							alt='first Guest'
							className='block w-20 rounded-full'
						/>
						<h2 className='text-xl font-medium mt-4'>Victoria Sean</h2>
						<span className='w-4/5 md:w-3/5 text-center text-sm text-[grey]'>
							from Ukraine
						</span>

						<div className='mt-6 text-center border rounded-lg p-4'>
							<div className='flex justify-center items-center w-28 h-6 rounded-xl mx-auto mb-2'>
								{[...Array(5)].map((_, index) => (
									<FaStar
										key={index}
										className='text-yellow-500 text-1xl mx-1'
									/>
								))}
							</div>

							<span className='w-4/5 md:w-3/5 text-center text-sm text-[grey] '>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Doloremque repellat perspiciatis, eligendi impedit voluptates id
								accusamus illo ipsum atque magni aut tempore iusto ratione
								mollitia!
							</span>
						</div>
					</div>

					{/* third room  */}
					<div className='w-96 flex-shrink-0 m-4 flex flex-col justify-center items-center snap-start'>
						<img
							src={face3}
							alt='first Guest'
							className='block rounded-full w-20'
						/>
						<h2 className='text-xl font-medium mt-4'>Eugene Victor</h2>
						<span className='w-4/5 md:w-3/5 text-center text-sm text-[grey]'>
							from Canada
						</span>

						<div className='mt-6 text-center border rounded-lg p-4'>
							<div className='flex justify-center items-center w-28 h-6 rounded-xl mx-auto mb-2'>
								{[...Array(5)].map((_, index) => (
									<FaStar
										key={index}
										className='text-yellow-500 text-1xl mx-1'
									/>
								))}
							</div>

							<span className='w-4/5 md:w-3/5 text-center text-sm text-[grey] '>
								dorem search dolor sit amet consectetur adipisicing elit.
								Doloremque repellat perspiciatis, eligendi impedit voluptates id
								accusamus illo ipsum atque magni aut tempore iusto ratione
								Voila!
							</span>
						</div>
					</div>

					{/* fourth room */}
					<div className='w-96 flex-shrink-0 m-4 flex flex-col justify-center items-center snap-start'>
						<img
							src={face4}
							alt='first Guest'
							className='block rounded-full w-20'
						/>
						<h2 className='text-xl font-medium mt-4'>Eugene Victor</h2>
						<span className='w-4/5 md:w-3/5 text-center text-sm text-[grey]'>
							from United States
						</span>

						<div className='mt-6 text-center border rounded-lg p-4'>
							<div className='flex justify-center items-center w-28 h-6 rounded-xl mx-auto mb-2'>
								{[...Array(5)].map((_, index) => (
									<FaStar
										key={index}
										className='text-yellow-500 text-1xl mx-1'
									/>
								))}
							</div>

							<span className='w-4/5 md:w-3/5 text-center text-sm text-[grey] '>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Doloremque repellat perspiciatis, eligendi impedit voluptates id
								accusamus illo ipsum atque magni aut tempore iusto ratione
								mollitia!
							</span>
						</div>
					</div>
				</div>

				{/* Left Arrow Button */}
				<button
					onClick={() =>
						document
							.getElementById("scrollable-containers")
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
							.getElementById("scrollable-containers")
							.scrollBy({ left: 350, behavior: "smooth" })
					}
					className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full'
				>
					→
				</button>
			</div>
		</div>
	);
};

export default GuestFeedbackSlider;
