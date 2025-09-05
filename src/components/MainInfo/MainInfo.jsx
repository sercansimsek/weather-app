import snowFlakeImg from '../../assets/images/13d.png';
import windImage from '../../assets/images/wind.png';

export const MainInfo = ({ query }) => {

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 justify-center items-center gap-3 w-[364px] rounded-2xl bg-[#20293A] px-5 py-6 text-[#F2F5F9] font-['Outfit']">
        <div className=" font-semibold text-[64px]">-1&deg;</div>

        <div className="flex flex-col text-end">
          <p className="font-medium text-2xl">{query}</p>
          <p className="font-medium text-xs">11:45 AM</p>
        </div>

        <div className="flex justify-start gap-3 items-center">
          <img src={snowFlakeImg} alt="snowflake" className="h-9 w-9" />
          <p className="text-xs font-base">Snow</p>
        </div>

        <div className="flex gap-3 justify-end items-center">
          <img src={windImage} alt="wind image" className="h-5 w-5" />
          <p className="font-medium text-base">5.14 m/s</p>
        </div>

        <div className="font-medium text-xs">
          <p>Feel like: -4 &deg;C</p>
        </div>

        <div className="text-end">
          <p>-1&deg; to 3&deg;</p>
        </div>
      </div>
    </div>
  );
};
