import React, {memo, useContext} from "react";
import AppViewUI from "./children/app-view";
import EmptyStateUI from "../../../../common/empty-state";
import { apiHost } from "../../../../constants";
import {HomeContext} from "../../index";
import useInfiniteScroll from "../../../../hooks/use-infinite-scroll";
import {useApps} from "../../../../hooks/use-apps";
import AppStore from "../../../../stores/AppStore";

const AppListUI = () => {

    const {cursor, setCursor} = useContext(HomeContext);
    const url = `${apiHost}/applications${cursor ? "?nextToken=" + cursor?.toString() : ""}`;
    const [isFetching, setIsFetching] = useInfiniteScroll(() => {
        setCursor(AppStore.getCursor)
    });
    const {error} = useApps(url, setIsFetching as React.Dispatch<React.SetStateAction<boolean>>);

    if(error) return <EmptyStateUI />;

    return (
        <>
            <AppViewUI isFetching={isFetching as boolean} />
        </>
    );

}

export default memo(AppListUI);
