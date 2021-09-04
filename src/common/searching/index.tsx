import React, {memo} from "react";
import {SearchingWrapper} from "./style/default";
import SearchInput from "./components/search-input";

const SearchingUI = () => {

    return (
        <SearchingWrapper>
            <SearchInput />
        </SearchingWrapper>
    );

}

export default memo(SearchingUI);