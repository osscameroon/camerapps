import React, {memo} from "react";
import {useFetch} from "../../../../hooks/use-fetch";
import AppCardUI from "./children/app-card";
import EmptyStateUI from "../../../../common/empty-state";
import {AppListWrapper} from "./style/default";
import {IApp} from "../../../../model/IApp";
import KeyBuilder from "../../../../utils/KeyBuilder";
import { apiHost } from "../../../../constants";

const AppListUI = () => {

    const {status, data, error} = useFetch(`${apiHost}/applications`);

    if(status === "fetching") return <>Loading...</>;
    if(status === "error" || data.data.length <= 0) return <EmptyStateUI/>;

    const values = data.data ?? [];

    return (
        <AppListWrapper>
            {
                values.map((item: IApp) => {
                    return (
                        <AppCardUI key={KeyBuilder.build} app={item} />
                    );
                })
            }
        </AppListWrapper>
    );

}

export default memo(AppListUI);
