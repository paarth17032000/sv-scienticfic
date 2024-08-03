"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/public/assets/logo.svg";
import { CiMail } from "react-icons/ci";
import MobileMenu from "../Dropdown/MenuDropdown";

export const navlinks = [
	{ name: "Home", route: "/" },
	{ name: "About us", route: "/about-us" },
	{ name: "Products", route: "/products" },
	{ name: "Contact us", route: "/contact-us" },
	{ name: "Pricelists", route: "/pricelists" },
];

export default function Navbar() {
	const pathname = usePathname();
	return (
		<>
			<nav className="lg:grid grid-cols-12 gap-8 h-[76px] border-b border-[#131E3A16] px-24 pb-2 hidden ">
				<div className="flex items-end gap-8 text-primary col-span-6">
					{navlinks.map((navlink) => (
						<Link
							href={navlink.route}
							key={navlink.name}
							className={`whitespace-nowrap ${navlink.route === pathname && "text-[#0F67FD] font-[700] relative"}`}
						>
							{navlink.name}
							<span
								className={`${navlink.route === pathname && "active_element "}`}
							/>
						</Link>
					))}
				</div>
				<div className="flex items-end justify-start col-span-2">
					<Image src={Logo} alt="logo" width={57} height={44} />
				</div>
				<div className="flex items-end justify-end col-span-4">
					<div className="flex items-center gap-1">
						<CiMail className="text-[#0F67FD] font-[700]" size={20} />
						<div>svscientificco@gmail.com</div>
					</div>
				</div>
			</nav>

			<nav className="flex justify-between items-center h-[76px] bg-[#FAFCFF] px-6 md:hidden w-full">
				<div className="">
					<Image src={Logo} alt="logo" width={57} height={44} />
				</div>
				<MobileMenu />
			</nav>
		</>
	);
}
