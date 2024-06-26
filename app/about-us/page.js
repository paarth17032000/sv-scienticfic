import Image from "next/image";
import Core1 from "@/public/assets/core-values/core-1.svg";
import Core2 from "@/public/assets/core-values/core-2.svg";
import Core3 from "@/public/assets/core-values/core-3.svg";
import Core4 from "@/public/assets/core-values/core-4.svg";
import CoreBgImg from "@/public/assets/core-values/coreBg.svg";
import User1 from '@/public/assets/authorized-users/user-1.png'
import User2 from '@/public/assets/authorized-users/user-2.png'
import User3 from '@/public/assets/authorized-users/user-3.png'
import User4 from '@/public/assets/authorized-users/user-4.png'
import User5 from '@/public/assets/authorized-users/user-5.png'
import User6 from '@/public/assets/authorized-users/user-6.png'
import User7 from '@/public/assets/authorized-users/user-7.png'
import User8 from '@/public/assets/authorized-users/user-8.png'
import User9 from '@/public/assets/authorized-users/user-9.png'
import User10 from '@/public/assets/authorized-users/user-10.png'
import User11 from '@/public/assets/authorized-users/user-11.png'
import User12 from '@/public/assets/authorized-users/user-12.png'

export default function Home() {
	return (
		<main className="min-h-screen bg-[#FAFCFF] md:px-24 px-12">
			<div className=" my-20">
				<div className="text-[#242E49]">
					<ul className="text-sm list-disc pl-4">
						<li>About us</li>
					</ul>
					<div className="text-[48px] font-[500] leading-[50px] mt-4 w-1/2">
						Welcome to a narrative of personalized excellence in every chapter.
					</div>
				</div>
			</div>

			<div className="grid grid-cols-5 gap-x-4 my-20">
				<div className="text-[#242E49] font-[500] text-[48px] col-span-2 flex items-start justify-center">
					Our Story
				</div>
				<div className="text-[#242D47] text-lg col-span-3 pt-3">
					<p>
						In the humble beginnings of our venture, we dared to dream big. Starting
						small, our vision was colossal — to reshape perceptions and promote the use
						of branded products.
					</p>
					<p className="mt-3">
						Working tirelessly at the grassroots, we etched our path by delivering not
						just products but unparalleled experiences. Every interaction was a
						testament to our commitment to the best and utmost satisfaction.
					</p>
					<p className="mt-3">
						With each passing day, our customers became our mentors. Their needs turned
						into valuable lessons, prompting us to diversify our offerings. Our
						portfolio evolved organically, reflecting the ever-growing dialogue between
						us and those we serve.
					</p>
					<p className="mt-3">
						In 1994, our journey took a significant turn with a dealership with
						Qualigens, transforming our trajectory. With their support, we navigated
						markets and institutes, delivering results that mirrored our customers'
						desires.
					</p>
					<p className="mt-3">
						During this journey, we secured dealerships with industry leaders like
						Avantor, Shimadzu, Molychem, and more. In 2010, we welcomed Borosil into our
						esteemed portfolio, followed by Whatman in 2014. These weren't mere
						dealerships; they were threads weaving a richer tapestry of quality and
						trust.
					</p>
					<p className="mt-3">
						Today, we stand as a testament to the power of vision, persistence, and
						partnerships. Our journey, shaped by the whispers of customers and
						strengthened by alliances, continues to unfold — a story of a laboratory
						supplier redefining horizons.
					</p>
				</div>
			</div>

			<div className="bg-[#242E48] h-[702px] w-full rounded-[24px] my-20 flex items-center justify-center relative">
				<div className="max-w-4xl grid grid-cols-2 gap-8 my-10">
					<div className="flex flex-col justify-center gap-4 w-[340px]">
						<div className="text-[#DEE3E8] px-6 py-2 rounded-[12px] border border-[#DEE3E8] w-fit">
							Principles
						</div>
						<div className="text-[#FDFCFF] text-[56px] leading-[60px] font-[700]">
							Our <br />
							Core Values
						</div>
						<div className="text-[#DCE1E8] text-lg">
							The Guiding principles that shape the culture and behavior of our
							company.
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<div className="bg-[#3D4966] flex items-center gap-4 p-4 rounded-[12px]">
							<div className="bg-[#5D6A85] p-4 rounded-[12px]">
								<Image
									src={Core1}
									alt="core_img"
									width={38}
									height={38}
									className="rounded-md "
								/>
							</div>
							<div className="flex-1">
								<div className="text-[#FDFCFF] text-xl font-[700]">
									Customer-Centric
								</div>
								<div className="text-[#BEC5D2] text-sm mt-1">
									We're dedicated to surpassing customer expectations with every
									heartbeat of our business.
								</div>
							</div>
						</div>

						<div className="bg-[#3D4966] flex items-center gap-4 p-4 rounded-[12px]">
							<div className="bg-[#5D6A85] p-4 rounded-[12px]">
								<Image
									src={Core2}
									alt="core_img"
									width={38}
									height={38}
									className="rounded-md "
								/>
							</div>
							<div className="flex-1">
								<div className="text-[#FDFCFF] text-xl font-[700]">
									Quality Excellence
								</div>
								<div className="text-[#BEC5D2] text-sm mt-1">
									We are committed to delivering products of the highest quality,
									adhering to rigorous standards.
								</div>
							</div>
						</div>

						<div className="bg-[#3D4966] flex items-center gap-4 p-4 rounded-[12px]">
							<div className="bg-[#5D6A85] p-4 rounded-[12px]">
								<Image
									src={Core3}
									alt="core_img"
									width={38}
									height={38}
									className="rounded-md "
								/>
							</div>
							<div className="flex-1">
								<div className="text-[#FDFCFF] text-xl font-[700]">
									Accountability
								</div>
								<div className="text-[#BEC5D2] text-sm mt-1">
									We take responsibility for our actions and outcomes, honoring
									our commitments to customers.
								</div>
							</div>
						</div>

						<div className="bg-[#3D4966] flex items-center gap-4 p-4 rounded-[12px]">
							<div className="bg-[#5D6A85] p-4 rounded-[12px]">
								<Image
									src={Core4}
									alt="core_img"
									width={38}
									height={38}
									className="rounded-md "
								/>
							</div>
							<div className="flex-1">
								<div className="text-[#FDFCFF] text-xl font-[700]">
									Continuous Learning
								</div>
								<div className="text-[#BEC5D2] text-sm mt-1">
									With insights gleaned from our customers, we adapt and innovate
									each day.
								</div>
							</div>
						</div>
					</div>
				</div>
				<Image
					src={CoreBgImg}
					alt="core_bg_img"
					width={97}
					height={143}
					className="absolute bottom-0 left-[12%]"
				/>
			</div>

			<div className="my-20">
				<div className="flex flex-col items-center">
					<button className="text-[#3D4966] text-base border border-[#D6DAE4] px-3 py-2 rounded-[9px]">
					Our Brands
					</button>
					<div className="text-[#242E49] font-[500] text-[48px] leading-[50px] mt-2 pr-4">
					Authorised Distributor
					</div>
				</div>

				<div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 my-16">
					<div className="w-[192px] h-[126px] rounded-[12px] border flex items-center justify-center shadow-userCard">
						<Image src={User1} alt='user' />
					</div>
					<div className="w-[192px] h-[126px] rounded-[12px] border flex items-center justify-center shadow-userCard">
						<Image src={User2} alt='user' />
					</div>
					<div className="w-[192px] h-[126px] rounded-[12px] border flex items-center justify-center shadow-userCard">
						<Image src={User3} alt='user' />
					</div>
					<div className="w-[192px] h-[126px] rounded-[12px] border flex items-center justify-center shadow-userCard">
						<Image src={User4} alt='user' />
					</div>
					<div className="w-[192px] h-[126px] rounded-[12px] border flex items-center justify-center shadow-userCard">
						<Image src={User5} alt='user' />
					</div>
					<div className="w-[192px] h-[126px] rounded-[12px] border flex items-center justify-center shadow-userCard">
						<Image src={User6} alt='user' />
					</div>
					<div className="w-[192px] h-[126px] rounded-[12px] border flex items-center justify-center shadow-userCard">
						<Image src={User7} alt='user' />
					</div>
					<div className="w-[192px] h-[126px] rounded-[12px] border flex items-center justify-center shadow-userCard">
						<Image src={User8} alt='user' />
					</div>
					<div className="w-[192px] h-[126px] rounded-[12px] border flex items-center justify-center shadow-userCard">
						<Image src={User9} alt='user' />
					</div>
					<div className="w-[192px] h-[126px] rounded-[12px] border flex items-center justify-center shadow-userCard">
						<Image src={User10} alt='user' />
					</div>
					<div className="w-[192px] h-[126px] rounded-[12px] border flex items-center justify-center shadow-userCard">
						<Image src={User11} alt='user' />
					</div>
					<div className="w-[192px] h-[126px] rounded-[12px] border flex items-center justify-center shadow-userCard">
						<Image src={User12} alt='user' />
					</div>

					
				</div>
			</div>
		</main>
	);
}
