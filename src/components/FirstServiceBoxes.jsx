import gym from "../assets/gym.jpg";
import spasalon from "../assets/spasalon.jpg";
import summerterace from "../assets/summerterace.jpg";

const FirstServiceBoxes = () => {
	return (
		<div className='mt-32 mx-auto p-4'>
			{/* first 3 services box */}
			<div className='mx-auto md:flex md:justify-center grid gap-6'>
				{/* First Image */}
				<div className='w-96 h-96 mx-auto relative'>
					<img
						src={gym}
						alt='gym images'
						className='w-full h-full object-cover shadow-lg'
					/>
					<div className='absolute inset-0  bg-opacity-50 flex justify-center items-center translate-y-16'>
						<div className='w-64 h-16 bg-white text-black p-4 overflow-hidden transition-all duration-300 ease-in-out hover:h-56'>
							<p className='font-bold text-center'>Gym</p>

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
						src={spasalon}
						alt='spa salon'
						className='w-full h-full object-cover shadow-lg'
					/>
					<div className='absolute inset-0  bg-opacity-50 flex justify-center items-center translate-y-16'>
						<div className='w-64 h-16 bg-white text-black text-center p-4 overflow-hidden transition-all duration-300 ease-in-out hover:h-56'>
							<p className='font-bold'>Spa Salon</p>

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
						src={summerterace}
						alt='summer terrace images'
						className='w-full h-full object-cover shadow-lg'
					/>
					<div className='absolute inset-0  bg-opacity-50 flex justify-center items-center translate-y-16 '>
						<div className='w-64 h-16 bg-white text-black text-center p-4 overflow-hidden transition-all duration-300 ease-in-out hover:h-56 '>
							<p className='font-bold'>Summer Terrace</p>

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
		</div>
	);
};

export default FirstServiceBoxes;
