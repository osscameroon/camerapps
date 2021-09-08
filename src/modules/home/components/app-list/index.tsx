import React, {memo} from "react";
import {useFetch} from "../../../../hooks/use-fetch";
import AppCardUI from "./children/app-card";
import EmptyStateUI from "../../../../common/empty-state";
import {AppListWrapper} from "./style/default";
import {IApp} from "../../../../model/IApp";

const AppListUI = () => {

    const {status, data, error} = useFetch("https://restcountries.eu/rest/v2/alpha?codes=col;no;ee");

    console.log(status, data, error);

    if(status === "fetching") return <>Loading...</>
    if(status === "error" || data.length <= 0) return <EmptyStateUI/>

    return (
        <AppListWrapper>
            {
                data.map((item: IApp) => {
                    return (
                        <AppCardUI app={item} />
                    );
                })
            }
        </AppListWrapper>
    );

}

export default memo(AppListUI);