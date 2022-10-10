import {fetcher} from "../utils";
import useSWR from "swr";
import React, {useContext, useEffect} from "react";
import AppStore from "../stores/AppStore";
import {HomeContext} from "../modules/home";

type Response = {
    // data: {
    //     data?: {
    //         items: IApp[]
    //     }
    // },
    isLoading: boolean;
    error: Error
}

export const useApps = (url: string, setFetching?:  React.Dispatch<React.SetStateAction<boolean>>): Response => {
    const { data, error } = useSWR(url, fetcher);
    const {setCursor} = useContext(HomeContext);

    useEffect(() => {
        if(data) {
            const res = data?.data;
            AppStore.setCursor(res?.nextToken);
            AppStore.setList(res?.items ?? []);
            setFetching?.(false);
        }
    }, [data])

    return {
        isLoading: !error && !data,
        error: error
    }
}
