import GuestFeedbackSlider from "./GuestFeedbackSlider";

const GuestFeedback = () => {
	return (
		<>
			<div className='flex flex-col items-center text-center mt-32 w-full'>
				<h2 className='text-3xl font-bold mb-4'>Feedback from our Guests</h2>

				<span className='w-4/5 md:w-3/5 text-center text-sm text-[grey]'>
					Hear from Our Visitors. Read real reviews from guests and share your
					own experience. Your opinions matter to us and help shape the future
					of our hotel.
				</span>
			</div>

      <GuestFeedbackSlider  />
		</>
	);
};

export default GuestFeedback;
