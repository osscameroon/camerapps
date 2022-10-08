import React, {memo} from "react";
import {useFetch} from "../../../../hooks/use-fetch";
import AppViewUI from "./children/app-view";
import EmptyStateUI from "../../../../common/empty-state";
import { apiHost } from "../../../../constants";

const AppListUI = () => {

    const {status, data: {data} } = useFetch(`${apiHost}/applications`);

    if(status === "fetching") return <>Loading...</>;
    if(status === "error") return <EmptyStateUI/>;

    const values = data.items ?? [];
    
    if(values.length <= 0) return <EmptyStateUI />;

    return (
        <AppViewUI list={values} />
    );

}

export default memo(AppListUI);
