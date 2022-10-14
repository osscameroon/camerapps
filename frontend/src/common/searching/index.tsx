import React, {memo} from "react";
import {SearchingWrapper} from "./style/default";
import SearchInput from "./components/search-input";
import CustomDropdown from "./components/dropdown-category";
import { apiHost } from "../../constants";

const SearchingUI = () => {

    return (
        <SearchingWrapper>
            <SearchInput />
            <div className="dropdowns">
                <CustomDropdown url={apiHost + "/categories"} name={"categoryId"} type={"CATEGORY"}/>
                <CustomDropdown url={apiHost + "/genres"} name={"genderId"} type={"GENDER"}/>
            </div>
        </SearchingWrapper>
    );

}

export default memo(SearchingUI);
