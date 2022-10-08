import React, {memo} from "react";
import {SearchingWrapper} from "./style/default";
import SearchInput from "./components/search-input";
import CustomDropdown from "./components/dropdown-category";
import { apiHost } from "../../constants";

const SearchingUI = () => {

    const onSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <SearchingWrapper onSubmit={onSubmit}>
            <SearchInput />
            <div className="dropdowns">
                <CustomDropdown url={apiHost + "/categories"} name={"categoryId"} type={"CATEGORY"}/>
                <CustomDropdown url={apiHost + "/genres"} name={"genderId"} type={"GENDER"}/>
            </div>
        </SearchingWrapper>
    );

}

export default memo(SearchingUI);
