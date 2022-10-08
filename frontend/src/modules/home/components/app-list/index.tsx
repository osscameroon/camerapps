import React, {memo} from "react";
import {useFetch} from "../../../../hooks/use-fetch";
import AppViewUI from "./children/app-view";
import EmptyStateUI from "../../../../common/empty-state";
import { apiHost } from "../../../../constants";
import {useApps} from "../../../../hooks/use-apps";

const AppListUI = () => {

    const {data, error, isLoading} = useApps(`${apiHost}/applications`);

    if(isLoading) return <>Loading...</>;
    if(error) return <EmptyStateUI />;

    const values = data?.data?.items ?? [];
    
    if(values.length <= 0) return <EmptyStateUI />;

    return (
        <AppViewUI list={values} />
    );

}

export default memo(AppListUI);
