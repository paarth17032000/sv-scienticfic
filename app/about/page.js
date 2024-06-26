import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
				<nav className="flex items-center justify-between gap-8 h-[76px]">
					<div className="flex items-center gap-4 text-primary">
						<div>Home</div>
						<div>About us</div>
						<div>Products</div>
						<div>Contact us</div>
						<div>Pricelists</div>
					</div>
					<div></div>
					<div>svscientificco@gmail.com</div>
				</nav>
			</div>
		</main>
	);
}
