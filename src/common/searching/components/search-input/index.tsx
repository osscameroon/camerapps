import React, {ChangeEvent, memo, useState} from "react";
import {IoCloseCircleSharp, IoSearch} from "react-icons/io5";
import { SearchInputWrapper } from "./style/default";

const SearchInput = () => {

    const [state, setState] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");

    const clear = () => {
        setValue("");
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setValue(text);
        if(text.length > 0) {
            setState(true);
        } else {
            setState(false)
        }
    }


    return (
        <SearchInputWrapper>
            <IoSearch size={20} color={"#777"}/>
            <input type="text" placeholder={"Search..."} value={value} onChange={onChange} className={"search"}/>
            {
                state ? <button type={"button"} onClick={clear}><IoCloseCircleSharp size={20} color={"#777"}/></button> : null
            }
        </SearchInputWrapper>
    );

}

export default memo(SearchInput);