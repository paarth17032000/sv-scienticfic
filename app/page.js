import Image from "next/image";
import Logo from "@/public/assets/logo.svg";
import HeroImg from "@/public/assets/hero.png";
import Serve1 from "@/public/assets/what-serves/serve1.png";
import Serve2 from "@/public/assets/what-serves/serve2.png";
import Serve3 from "@/public/assets/what-serves/serve3.png";
import WhyUs1 from "@/public/assets/why-us/why1.svg";
import WhyUs2 from "@/public/assets/why-us/why2.svg";
import WhyUs3 from "@/public/assets/why-us/why3.svg";
import WhyUs4 from "@/public/assets/why-us/why4.svg";
import WhyBgImg from "@/public/assets/why-us/whyBg.svg";
import PartnerImg from "@/public/assets/partners.png";
import LogoFooterImg from "@/public/assets/logo_footer.svg";
import { TbArrowNarrowRight } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

const navlinks = [
	{ name: "Home", route: "" },
	{ name: "About us", route: "" },
	{ name: "Products", route: "" },
	{ name: "Contact us", route: "" },
	{ name: "Pricelists", route: "" },
];

export default function Home() {
	return (
		<main className="min-h-screen bg-[#FAFCFF]">
			<nav className="grid grid-cols-12 gap-8 h-[76px] border-b border-[#131E3A16] px-24 pb-2">
				<div className="flex items-end gap-8 text-primary col-span-6">
					{navlinks.map((navlink) => (
						<Link href={navlink.route} key={navlink.name} className="whitespace-nowrap">
							{navlink.name}
						</Link>
					))}
				</div>
				<div className="flex items-end justify-start col-span-2">
					<Image src={Logo} alt="logo" width={57} height={44} />
				</div>
				<div className="flex items-end justify-end col-span-4">
					svscientificco@gmail.com
				</div>
			</nav>

			<div className="flex flex-col items-center">
				<div className="flex items-end justify-start col-span-2">
					<Image src={HeroImg} alt="hero_img" width={671} height={373} />
				</div>
				<div className="text-md text-secondary font-regular">
					India&apos;s Most Trusted Laboratory Supplier
				</div>
				<div className="text-[36px] mt-4">
					<span className="text-[#242E49]">We provide</span>{" "}
					<span className="text-[#0F67FD]">Laboratory Equipments</span>
				</div>
			</div>

			<div className="bg-[#242E49] mx-20 h-[350px] my-10 rounded-xl brand-background-img flex items-center pl-28">
				<div className="flex flex-col">
					<div className="text-[#DEE3E8] border border-[#DEE3E8] py-3 px-7 rounded-[9px] text-sm w-fit">
						Our Brands
					</div>
					<div className="text-[#FDFCFF] text-[48px] font-[700]">
						Authorised <br />
						Distributor
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center w-full my-10">
				<div className="max-w-4xl grid grid-cols-2 gap-8 my-10">
					<div className="text-[#242E49]">
						<ul className="text-sm list-disc pl-4">
							<li>Our Services</li>
						</ul>
						<div className="text-[48px] font-[500]">What We Serve</div>
					</div>
					<div className="text-[#5D6A85] text-md font-regular leading-7">
						We offer an extensive selection of chemicals, glassware, and laboratory
						equipment tailored to meet the diverse requirements of industrial setups and
						institutes.
					</div>
				</div>

				<div className="max-w-4xl grid grid-cols-3 gap-8 my-10">
					<div className="flex flex-col p-4 rounded-md cursor-pointer  hover:shadow-serve">
						<Image
							src={Serve1}
							alt="serve_img"
							width={335}
							height={334}
							className="rounded-md"
						/>
						<div className="text-[#242E49] text-xl mt-4 font-[500]">
							Chemical Solutions
						</div>
						<div className="text-[#5D6A85] text-sm font-regular my-2 h-16">
							Precision in every chemical, ensuring optimal performance.
						</div>
						<div className="w-full flex justify-end">
							<div className="flex items-center gap-2 cursor-pointer  text-white w-fit bg-[#0F67FE] py-3 px-3 rounded-[12px]">
								<span>View more</span>
								<TbArrowNarrowRight size={24} />
							</div>
						</div>
					</div>

					<div className="flex flex-col p-4 rounded-md cursor-pointer hover:shadow-serve">
						<Image
							src={Serve2}
							alt="serve_img"
							width={335}
							height={334}
							className="rounded-md"
						/>
						<div className="text-[#242E49] text-xl mt-4 font-[500]">Lab Glassware</div>
						<div className="text-[#5D6A85] text-sm font-regular my-2 h-16">
							Elevate your experiments with industry-standard laboratory glassware.
						</div>
						<div className="w-full flex justify-end">
							<div className="flex items-center gap-2 text-white w-fit bg-[#242D47] py-3 px-3 rounded-[12px]">
								<TbArrowNarrowRight size={24} />
							</div>
						</div>
					</div>

					<div className="flex flex-col p-4 rounded-md cursor-pointer hover:shadow-serve">
						<Image
							src={Serve3}
							alt="serve_img"
							width={335}
							height={334}
							className="rounded-md"
						/>
						<div className="text-[#242E49] text-xl mt-4 font-[500]">Lab Equipment</div>
						<div className="text-[#5D6A85] text-sm font-regular my-2 h-16">
							Cutting-edge laboratory equipment sourced from industry leaders.
						</div>
						<div className="w-full flex justify-end">
							<div className="flex items-center gap-2 text-white w-fit bg-[#242D47] py-3 px-3 rounded-[12px]">
								<TbArrowNarrowRight size={24} />
							</div>
						</div>
					</div>
				</div>

				<div className="bg-[#242E48] h-[702px] w-full rounded-[24px] mt-20 flex items-center justify-center relative">
					<div className="max-w-4xl grid grid-cols-2 gap-8 my-10">
						<div className="flex flex-col justify-center gap-4 w-[300px]">
							<div className="text-[#DEE3E8] px-6 py-2 rounded-[12px] border border-[#DEE3E8] w-fit">
								Features
							</div>
							<div className="text-[#FDFCFF] text-[56px] leading-[60px] font-[700]">
								Why <br />
								Choose us
							</div>
							<div className="text-[#DCE1E8] text-lg">
								Elevate your labs with wide selection of chemicals, glassware, and
								equipment.
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<div className="bg-[#3D4966] flex gap-4 p-4 rounded-[12px]">
								<div className="bg-[#5D6A85] p-4 rounded-[12px]">
									<Image
										src={WhyUs1}
										alt="why_us_img"
										width={44}
										height={44}
										className="rounded-md "
									/>
								</div>
								<div className="flex-1">
									<div className="text-[#FDFCFF] text-xl font-[700]">
										Authentic Brands Only
									</div>
									<div className="text-[#BEC5D2] text-sm mt-1">
										All products are 100% branded, ensuring authenticity and
										quality with every purchase.
									</div>
								</div>
							</div>

							<div className="bg-[#3D4966] flex gap-4 p-4 rounded-[12px]">
								<div className="bg-[#5D6A85] p-4 rounded-[12px]">
									<Image
										src={WhyUs2}
										alt="why_us_img"
										width={44}
										height={44}
										className="rounded-md "
									/>
								</div>
								<div className="flex-1">
									<div className="text-[#FDFCFF] text-xl font-[700]">
										Unbeatable Pricing
									</div>
									<div className="text-[#BEC5D2] text-sm mt-1">
										We strive to offer the most competitive prices to our
										costumers.
									</div>
								</div>
							</div>

							<div className="bg-[#3D4966] flex gap-4 p-4 rounded-[12px]">
								<div className="bg-[#5D6A85] p-4 rounded-[12px]">
									<Image
										src={WhyUs3}
										alt="why_us_img"
										width={44}
										height={44}
										className="rounded-md "
									/>
								</div>
								<div className="flex-1">
									<div className="text-[#FDFCFF] text-xl font-[700]">
										Diverse Product Range
									</div>
									<div className="text-[#BEC5D2] text-sm mt-1">
										Your one-stop solution for diverse laboratory needs.
									</div>
								</div>
							</div>

							<div className="bg-[#3D4966] flex gap-4 p-4 rounded-[12px]">
								<div className="bg-[#5D6A85] p-4 rounded-[12px]">
									<Image
										src={WhyUs4}
										alt="why_us_img"
										width={44}
										height={44}
										className="rounded-md "
									/>
								</div>
								<div className="flex-1">
									<div className="text-[#FDFCFF] text-xl font-[700]">
										Stock Availability
									</div>
									<div className="text-[#BEC5D2] text-sm mt-1">
										Shop with confidence knowing that our inventory is available
										with the products you need.
									</div>
								</div>
							</div>
						</div>
					</div>
					<Image
						src={WhyBgImg}
						alt="why_bg_img"
						width={97}
						height={143}
						className="absolute bottom-0 left-[12%]"
					/>
				</div>

				<div className="max-w-5xl grid grid-cols-5 gap-x-8 my-28">
					<div className="flex flex-col items-start col-span-2">
						<button className="text-[#3D4966] text-base border border-[#D6DAE4] px-3 py-2 rounded-[9px]">
							Trusted by many
						</button>
						<div className="text-[#242E49] font-[500] text-[48px] leading-[50px] mt-2 pr-4">
							What people say about us
						</div>
					</div>
					<div className="flex flex-col items-start justify-end">
						<div className="text-[#242E49] text-[36px] font-[700]">30+</div>
						<div className="text-[#5D6A85] text-lg font-[700]">Years of Experience</div>
					</div>
					<div className="flex flex-col items-startt justify-end">
						<div className="text-[#242E49] text-[36px] font-[700]">2K+</div>
						<div className="text-[#5D6A85] text-lg font-[700]">Satisfied Clientage</div>
					</div>
					<div className="flex flex-col items-startt justify-end">
						<div className="text-[#242E49] text-[36px] font-[700]">1K+</div>
						<div className="text-[#5D6A85] text-lg font-[700]">Product Count</div>
					</div>
				</div>

				<div>
					<Image src={PartnerImg} alt="partner_img" className="w-full" />
				</div>

				{/* contact us */}
				<div className=" my-20">
					<div className="flex flex-col items-center">
						<button className="text-[#3D4966] text-base border border-[#D6DAE4] px-3 py-2 rounded-[9px]">
							Contact us
						</button>
						<div className="text-[#242E49] font-[500] text-[48px] leading-[50px] mt-2 pr-4">
							Get in Touch
						</div>
						<div className="text-[#5D6A85] text-md mt-4">
							Ready to level up your Laboratory?
						</div>
					</div>

					<div className="grid grid-cols-3 gap-8 max-w-4xl mt-10 text-[#242E49] font-[700] text-md">
						<div className="bg-white shadow-lg p-6 rounded-[12px] border border-[#00115E14]">
							<div className="bg-[#EDF5FF] w-fit p-2 rounded-[9px]">
								<CiMail />
							</div>
							<div className=" mt-10">Mail us</div>
							<div className="text-[#5D6A85] font-[400]">We are here to help</div>
							<div className=" mt-2">svscientificco@gmail.com</div>
						</div>

						<div className="bg-white shadow-lg p-6 rounded-[12px] border border-[#00115E14]">
							<div className="bg-[#FFF1F3] w-fit p-2 rounded-[9px]">
								<IoIosCall />
							</div>
							<div className=" mt-10">Call us</div>
							<div className="text-[#5D6A85] font-[400]">
								Mon-Fri from 10am to 5pm
							</div>
							<div className=" mt-2">+91 9119014669</div>
						</div>

						<div className="bg-white shadow-lg p-6 rounded-[12px] border border-[#00115E14]">
							<div className="bg-[#F6F2FF] w-fit p-2 rounded-[9px]">
								<FaLocationDot />
							</div>
							<div className=" mt-10">Visit us</div>
							<div className="text-[#5D6A85] font-[400]">Visit our office HQ</div>
							<button className="text-[#3D4966] text-base border border-[#D6DAE4] px-3 py-2 mt-2 rounded-[9px]">
								Get direction
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* footer */}
			<div className="bg-[#242E48] flex items-center justify-center px-16 py-20 rounded-t-[24px]">
				<div className="max-w-4xl flex items-center justify-between w-full">
					<div className="flex flex-col">
						<Image src={LogoFooterImg} alt="logo" />
						<div className="text-[#BEC5D2] text-md w-[250px] mt-6">
							S. V. Scientific Co was established in 1991 with a vision to redefine
							industry standards, we take pride in our commitment to delivering
							quality products.
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
									13 Ram Lila Bhawan, New Mandi, Muzaffar Nagar, Uttar
									Pradesh-251001
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
