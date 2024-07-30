import { Search } from "lucide-react";
import React from "react";

type Props = {
    setSearch: (value: string) => void;
}

const SearchSection = ({setSearch}: Props) => {
  return (
    <div className="p-8 text-white bg-gradient-to-tr from-orange-500 to-blue-200 shadow-xl flex flex-col justify-center items-center">
      <h2 className="text-3xl font-semibold">Browse All Template</h2>
      <p className="text-sm">What would you like to build today?</p>
      <div className="mt-5">
      <div className="flex items-center gap-2 rounded-md max-w-sm p-2 border bg-white w-[500px]">
            <Search className="h-6 w-6 text-primary" />
            <input type="text" placeholder='Search...' className="ml-2 outline-none text-black w-[500px]" onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
