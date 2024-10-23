import FooterImg from "../assets/FooterImg.jpg";
import logo from "../assets/logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<div
				className='bg-cover bg-center h-96 '
				style={{ backgroundImage: `url(${FooterImg})` }}
			>
				<div className=' '>
					<span>
						<Link to='/Home'>
							<img
								src={logo}
								className='w-24 pb-10 cursor-pointer'
								alt='logo icon'
							/>{" "}
						</Link>
					</span>

					<p className='text-sm text-[grey] mb-6 w-4/5 md:w-3/5 m-4 '>
						We are premier destination for travelers seeking comfort, luxury,
						and unparalleled hospitality. We are dedicated to making your stay
						unforgettable. Experience the difference with us.
					</p>

					<span className='flex'>
						<a
							href='https://x.com/Vinomillz_'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaXTwitter className='text-3xl cursor-pointer m-3 ' />
						</a>

						<a
							href='https://www.linkedin.com/in/vincent-umezinwa-772678249/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaLinkedinIn className='text-3xl m-3 cursor-pointer' />
						</a>

						<a
							href='https://github.com/Vinomillz/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<IoLogoGithub className='text-3xl cursor-pointer m-3' />
						</a>
					</span>
				</div>

				<p className='text-xl flex absolute bottom-0 text-gray-600'>
					© 2023 Vinomillz_. All Rights Reserved.
				</p>
			</div>
		</>
	);
};

export default Footer;
