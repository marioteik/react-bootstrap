import { Command, Search as SearchIcon } from "lucide-react";

export function Search() {
  const handleClick = () => {
    console.log("search");
  };

  return (
    <div
      onClick={handleClick}
      className="flex space-x-3 items-center cursor-pointer"
    >
      <SearchIcon className="text-primary" />
      <span className="text-muted-foreground">Search</span>
      <div className="text-muted-foreground text-sm flex justify-start items-center border px-2 rounded h-6">
        <Command className="w-4 h-3" /> <span className="leading-2">K</span>
      </div>
    </div>
  );
}
