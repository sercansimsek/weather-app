import darkClouds from "../../assets/images/04d.png";

export const FiveDayCard = () => {
	return (
    <>
    <div className="font-medium text-xl text-[#F2F5F9] mb-[20px]">5-day forecast</div>
		<div className="flex justify-center items-center gap-6 bg-[#20293A] h-[60px] w-max rounded-2xl text-[#F2F5F9] px-4 py-3">
			<p className="font-medium text-xl">Today</p>
			<img src={darkClouds} alt="dark clouds" className="h-9 w-9" />

			<div className="flex justify-center items-center gap-3">
				<p className="font-medium text-base">-1&deg;</p>
				<div className="h-[6px] w-[130px] bg-[#030616] rounded-lg relative">
					<div className="h-[6px] w-[27px] bg-[#4E80EE] absolute left-5 rounded-lg"></div>
				</div>
				<p className="font-medium text-base">3&deg;</p>
			</div>
		</div>
    </>
	);
};
