import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactUs() {
	return (
		<main className="bg-[#FAFCFF] md:px-24 px-12 pt-20 pb-40">
			<div className="">
				<div className="text-[#242E49]">
					<ul className="text-sm list-disc pl-4">
						<li>Contact us</li>
					</ul>
					<div className="text-[48px] font-[500] leading-[50px] mt-4 w-1/2">
						Connect with us
					</div>
					<div className="mt-4 text-[#5D6A85] text-md">
						Get in Touch: Contact Us for Inquiries and Assistance
					</div>
				</div>
			</div>

			<div className="grid grid-cols-3 gap-20 mt-16 text-[#242E49] font-[700] text-md">
				<div className="">
					<div className="bg-white shadow-sm border border-[#00115E14] w-fit p-2 rounded-[9px]">
						<CiMail />
					</div>
					<div className=" mt-4">Mail us</div>
					<div className="text-[#5D6A85] font-[400]">We are here to help</div>
					<div className="">svscientificco@gmail.com</div>
				</div>

				<div className="">
					<div className="bg-white shadow-sm border border-[#00115E14] w-fit p-2 rounded-[9px]">
						<IoIosCall />
					</div>
					<div className=" mt-4">Call us</div>
					<div className="text-[#5D6A85] font-[400]">Mon-Fri from 10am to 5pm</div>
					<div className="">+91 9119014669</div>
				</div>

				<div className="">
					<div className="bg-white shadow-sm border border-[#00115E14] w-fit p-2 rounded-[9px]">
						<FaLocationDot />
					</div>
					<div className=" mt-4">Visit us</div>
					<div className="text-[#5D6A85] font-[400]">13, Ramlila Bhawan, New Mandi,
                        <br />
                    Muzaffar Nagar, U.P.-251001</div>
				</div>
			</div>
		</main>
	);
}
