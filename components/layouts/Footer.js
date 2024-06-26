import LogoFooterImg from "@/public/assets/logo_footer.svg";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
	return (
		<div className="bg-[#242E48] flex items-center justify-center px-16 py-20 rounded-t-[24px]">
			<div className="max-w-4xl flex items-center justify-between w-full">
				<div className="flex flex-col">
					<Image src={LogoFooterImg} alt="logo" />
					<div className="text-[#BEC5D2] text-md w-[250px] mt-6">
						S. V. Scientific Co was established in 1991 with a vision to redefine
						industry standards, we take pride in our commitment to delivering quality
						products.
					</div>
				</div>
				<div className="flex gap-12 text-[#FDFCFF]">
					<div className="flex flex-col gap-5 font-[500] text-md">
						<div className="cursor-pointer">Home</div>
						<div className="cursor-pointer">Products</div>
						<div className="cursor-pointer">About us</div>
						<div className="cursor-pointer">Contact us</div>
						<div className="cursor-pointer">Pricelists</div>
					</div>
					<div className="flex flex-col gap-4 text-md">
						<div>
							<CiMail />
							<div>svscientificc@gmail.com</div>
						</div>
						<div>
							<IoIosCall />
							<div className="mt-1">+91 9119014669</div>
						</div>
						<div>
							<FaLocationDot />
							<div className="w-[230px] mt-1">
								13 Ram Lila Bhawan, New Mandi, Muzaffar Nagar, Uttar Pradesh-251001
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
