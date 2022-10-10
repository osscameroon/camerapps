import React, {memo, useContext} from "react";
import {useFetch} from "../../../../hooks/use-fetch";
import AppViewUI from "./children/app-view";
import EmptyStateUI from "../../../../common/empty-state";
import { apiHost } from "../../../../constants";
// import {useApps} from "../../../../hooks/use-apps";
import {HomeContext} from "../../index";
import useInfiniteScroll from "../../../../hooks/use-infinite-scroll";
import {useApps} from "../../../../hooks/use-apps";
import AppStore from "../../../../stores/AppStore";
import styled from "styled-components";

export type AppListUIProps = {

}

const AppListUI = ({}: AppListUIProps) => {

    // ${cursor ? "?nextToken=" + cursor.toString() : ""}
    const {cursor, setCursor} = useContext(HomeContext);
    const url = `${apiHost}/applications${cursor ? "?nextToken=" + cursor?.toString() : ""}`;
    const [isFetching, setIsFetching] = useInfiniteScroll(() => {
        setCursor(AppStore.getCursor)
    });
    const {error, isLoading} = useApps(url, setIsFetching as React.Dispatch<React.SetStateAction<boolean>>);


    if(isLoading) return <>Loading...</>;
    if(error) return <EmptyStateUI />;

    return (
        <>
            <AppViewUI isFetching={isFetching as boolean} />
        </>
    );

}

export default memo(AppListUI);
