import { FC } from "react";

interface SearchBarProps {
  searchText: string;
  styleClass?: string;
  placeholderText?: string;
  setSearchText: (value: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({
  searchText,
  styleClass = "",
  placeholderText = "Search",
  setSearchText,
}) => {
    return (
      <div className={`inline-block ${styleClass}`}>
        <div className="input-group relative flex flex-wrap items-stretch w-full">
          <input
            type="search"
            value={searchText}
            placeholder={placeholderText}
            onChange={(e) => setSearchText(e.target.value)}
            className="input input-sm input-bordered w-full max-w-xs"
          />
        </div>
      </div>
    );
};
