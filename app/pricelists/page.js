import { MdOutlineSearch } from "react-icons/md";

export default function Pricelists() {
	return (
		<main className="bg-[#FAFCFF] md:px-24 px-12 pt-20 pb-40">
			<div className="">
				<div className="text-[#242E49]">
					<ul className="text-sm list-disc pl-4">
						<li>Pricelists</li>
					</ul>
					<div className="text-[48px] font-[500] leading-[50px] mt-4 w-1/2">
						Explore Pricing of the <br />
						Products
					</div>
				</div>
			</div>

      <div className="flex flex-col mt-28 max-w-3xl">
        <div className="flex gap-2 border-2 border-[#E4E8ED] rounded-[8px] p-3 text-[#242E49]">
          <MdOutlineSearch size={24} className="" color="#C5CAD3" />
          <input className="outline-none text-[#242E49] bg-transparent" type="text" placeholder="Search . . ." />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between border-b py-6 border-[#DCE1E8]">
            <div className="flex flex-col gap-2">
              <div className="text-[#242E49] font-[700] text-lg">Qualigens Pricelist</div>
              <div className="text-[#5D6A85] text-lg">2024-2025</div>
            </div>
            <div className="border cursor-pointer border-[#5D6A85] rounded-[8px] px-5 py-2 bg-white font-[500] text-[#242E49]">Download</div>
          </div>

          <div className="flex items-center justify-between py-6">
            <div className="flex flex-col gap-2">
              <div className="text-[#242E49] font-[700] text-lg">Borosil Pricelist</div>
              <div className="text-[#5D6A85] text-lg">2024-2025</div>
            </div>
            <div className="border cursor-pointer border-[#5D6A85] rounded-[8px] px-5 py-2 bg-white font-[500] text-[#242E49]">Download</div>
          </div>
        </div>
      </div>
		</main>
	);
}
