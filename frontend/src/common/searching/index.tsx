import React, {memo} from "react";
import {SearchingWrapper} from "./style/default";
import SearchInput from "./components/search-input";
import CustomDropdown from "./components/dropdown-category";
import SearchingController from "./controller";

const SearchingUI = () => {

    const onSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <SearchingWrapper onSubmit={onSubmit}>
            <SearchInput />
            <div className="dropdowns">
                <CustomDropdown data={SearchingController.getCategories}/>
                <CustomDropdown data={SearchingController.getGenders}/>
            </div>
        </SearchingWrapper>
    );

}

export default memo(SearchingUI);