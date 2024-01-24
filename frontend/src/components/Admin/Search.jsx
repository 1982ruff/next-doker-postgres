import { Search } from "lucide-react";

const SearchComponent = ({ placeholder }) => {
  return (
    <div className="flex items-center gap-3 px-5 py-2 bg-white rounded-md w-fit">
      <Search size={18} />
      <input
        type="search"
        placeholder={placeholder}
        className=" focus:outline-none placeholder:text-sm"
      />
    </div>
  );
};

export default SearchComponent;
