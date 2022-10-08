import {observer} from "mobx-react";
import React, {useEffect} from "react";
import {IApp} from "../../../../../../model/IApp";
import AppStore from "../../../../../../stores/AppStore";
import AppCardUI from "./../../children/app-card";
import {AppViewWrapper} from "./../../style/default";
import EmptyStateUI from "./../../../../../../common/empty-state";

interface AppViewProps {
    list: Array<IApp>;
}

const AppViewUI = ({list = []}: AppViewProps) => {

    useEffect(() => {
        AppStore.setList(list);
    }, [list])

    if (!(AppStore.searchInput === null ? AppStore.getList : AppStore.getSearchResults) || (AppStore.searchInput === null ? AppStore.getList : AppStore.getSearchResults)?.length === 0) {
        return <EmptyStateUI/>;
    }

    return (
        <AppViewWrapper>
            {
                (AppStore.searchInput === null ? AppStore.getList : AppStore.getSearchResults).map((item: IApp, index) => {
                    return (
                        <AppCardUI key={index} app={item}/>
                    );
                })
            }
        </AppViewWrapper>
    );

}

export default observer(AppViewUI);
