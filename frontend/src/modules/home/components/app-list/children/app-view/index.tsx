import { observer } from "mobx-react";
import React, { useEffect} from "react";
import { IApp } from "../../../../../../model/IApp";
import AppStore from "../../../../../../stores/AppStore";
import KeyBuilder from "../../../../../../utils/KeyBuilder";
import AppCardUI from "./../../children/app-card";
import {AppViewWrapper} from "../../style/default";

interface AppViewProps {
    list: Array<IApp>;
}

const AppViewUI = ({list = []}: AppViewProps) => {

    useEffect(() => {
        AppStore.setList(list);
    }, [list])

    return (
        <AppViewWrapper>
            {
                (AppStore.searchInput === null ? AppStore.getList : AppStore.getSearchResults).map((item: IApp) => {
                    return (
                        <AppCardUI key={KeyBuilder.build} app={item} />
                    );
                })
            }
        </AppViewWrapper>
    );

}

export default observer(AppViewUI);
