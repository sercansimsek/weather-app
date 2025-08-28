import searchIcon from "../../assets/images/Search.svg";

export const SearchBar = () => {
	return (
		<div className="flex w-[364px] gap-10 font-['Outfit']">
			<div className="flex gap-3 justify-center items-center bg-[#20293A] w-[240px] rounded-3xl text-[#F2F5F9] placeholder-[#F2F5F9]">
				<img src={searchIcon} alt="search Icon" className="h-6 w-6" />
				<input
					type="text"
					placeholder="Search city...."
					className="outline-none text-sm font-medium"
				/>
			</div>

			<div>
				<div className="flex items-center justify-between h-[40px] w-[76px] bg-[#20293A] rounded-3xl p-1">
					<div className="flex items-center justify-center h-8 w-8 bg-[#F2F5F9] rounded-full text-[#030616] font-bold text-base">
						&deg;C
					</div>
					<div className="flex items-center justify-center h-8 w-8 text-[#F2F5F9] font-bold text-base">
						&deg;F
					</div>
				</div>

				{/* <div className="flex items-center justify-end h-[40px] w-[76px] bg-[#20293A] rounded-3xl">
					<div className="flex items-center justify-center h-8 w-8 bg-[#20293A] rounded-full text-[#F2F5F9] font-bold text-base">
						&deg;F
					</div>
				</div> */}
			</div>
		</div>
	);
};
