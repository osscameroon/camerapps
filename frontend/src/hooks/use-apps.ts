import {fetcher} from "../utils";
import useSWR from "swr";
import {IApp} from "../model/IApp";

type Response = {
    data: {
        data?: {
            items: IApp[]
        }
    },
    isLoading: boolean;
    error: Error
}

export const useApps = (url: string): Response => {
    const { data, error } = useSWR(url, fetcher)

    return {
        data: data,
        isLoading: !error && !data,
        error: error
    }
}
