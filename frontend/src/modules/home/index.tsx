import React, {createContext, memo, useEffect, useState} from "react";
import {HomeWrapper} from "./style/default";
import AppListUI from "./components/app-list";
import AppStore from "../../stores/AppStore";
import Banner from "./components/banner";
import SearchingUI from "../../common/searching";

export type THomeContext = {
    cursor: number | undefined,
    setCursor: React.Dispatch<React.SetStateAction<number | undefined>>
}

export const HomeContext = createContext<THomeContext>({
    cursor: undefined,
    setCursor: () => {}
});

const HomeUI = () => {

    const [cursor, setCursor] = useState<number | undefined>();

    useEffect(() => {
        return () => {
            AppStore.clearStore();
        }
    }, [])

    return (
        <HomeContext.Provider value={{cursor, setCursor}}>
            <HomeWrapper>
                <Banner/>
                <SearchingUI/>
                <div className="home-list__container">
                    <AppListUI/>
                </div>
            </HomeWrapper>
        </HomeContext.Provider>
    );

}

export default memo(HomeUI);
