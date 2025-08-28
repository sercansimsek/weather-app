import snowFlakeImg from "../../assets/images/13d.png";

export const DailyCard = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-2 h-[187px] w-[80px] bg-[#20293A] rounded-2xl text-[#F2F5F9] font-['Outfit']">
			<p className="font-medium text-xs">9:00 AM</p>
			<hr className="border-0 bg-[#030616] h-[2px] w-[64px]" />

			<div className="flex flex-col justify-center items-center gap-[4px]">
				<img src={snowFlakeImg} alt="snowflake" className="h-9 w-9" />
				<p className="font-normal text-[10px]">Snow</p>
			</div>

			<p className="font-semibold text-[32px]">-1&deg;</p>
		</div>
	);
};
