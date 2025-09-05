import searchIcon from '../../assets/images/Search.svg';

export const SearchBar = ({ query, onSetQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSetQuery('');
  };
  return (
    <div className="flex gap-10 font-['Outfit'] justify-between items-center w-full">
      <form
        onSubmit={handleSubmit}
        className="flex gap-3 justify-center items-center bg-[#20293A] w-[240px] rounded-3xl text-[#F2F5F9] placeholder-[#F2F5F9] p-2"
      >
        <img
          src={searchIcon}
          alt="search Icon"
          className="h-6 w-6 cursor-pointer"
          onClick={handleSubmit}
        />
        <input
          type="text"
          placeholder="Search city...."
          className="outline-none text-sm font-medium"
          value={query}
          onChange={(e) => onSetQuery(e.target.value)}
        />
      </form>

      <div>
        <div className="flex items-center justify-between h-[40px] w-[76px] bg-[#20293A] rounded-3xl p-1">
          <button className="flex items-center justify-center h-8 w-8 bg-[#F2F5F9] rounded-full text-[#030616] font-bold text-base cursor-pointer">
            &deg;C
          </button>
          <button className="flex items-center justify-center h-8 w-8 text-[#F2F5F9] font-bold text-base">
            &deg;F
          </button>
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
