import sunImage from '../../assets/images/01d.png';

export const OtherCities = () => {
  return (
    <>
    <div className='font-medium text-xl text-[#F2F5F9] mb-5 font-["Outfit"]'>Other large cities</div>
    <div className='grid grid-cols-2 max-w-[364px] h-[118px] font-["Outfit"] p-5 text-[#F2F5F9] bg-[#20293A] rounded-2xl'>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-1'>
          <p className='font-normal text-sm'>US</p>
          <p className='font-medium text-2xl'>New York</p>
        </div>
        <p className='font-normal text-xs'>Clear sky</p>
      </div>

      <div className='flex flex-col gap-2 justify-center items-end'>
        <img src={sunImage} alt="sunny" className='h-[34px] w-[34px]' />
        <p className='font-medium text-2xl'>14&deg;</p>
      </div>
    </div>
    </>
  )
}
