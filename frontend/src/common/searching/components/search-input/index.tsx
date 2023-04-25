import { ChangeEvent, memo, useState } from "react";
import { IoCloseCircleSharp, IoSearch } from "react-icons/io5";
import { SearchInputWrapper } from "./style/default";
import AppStore from "../../../../stores/AppStore";

const SearchInput = () => {
  const [value, setValue] = useState<string>("");

  const clear = () => {
    setValue("");
    AppStore.clearName();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setValue(text);
    AppStore.setSearchInput("name", text);
  };

  return (
    <SearchInputWrapper>
      <IoSearch size={20} color={"#777"} className={"search--icon"} />
      <input
        type="text"
        placeholder={"Search..."}
        value={value}
        onChange={onChange}
        className={"search"}
      />
      {value !== "" ? (
        <button type={"button"} onClick={clear}>
          <IoCloseCircleSharp size={20} color={"#777"} />
        </button>
      ) : null}
    </SearchInputWrapper>
  );
};

export default memo(SearchInput);
