import {fetcher} from "../utils";
import useSWR from "swr";
import React, {useEffect} from "react";
import AppStore from "../stores/AppStore";
import { TResponse } from "../model/Response";
import {IApp} from "../model/IApp";

interface Response extends Omit<TResponse<any>, "data"> {
    isLoading: boolean;
    error: Error
}

export const useApps = (url: string, setFetching?:  React.Dispatch<React.SetStateAction<boolean>>): Response => {
    const { data, error } = useSWR(url, fetcher);

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
