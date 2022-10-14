import {fetcher} from "../utils";
import useSWR from "swr";
import {TResponse} from "../model/Response";

interface Response<R> extends TResponse<R> {}

export const useGet = <T>(url: string): Response<T> => {
    const { data, error } = useSWR(url, fetcher);

    return {
        isLoading: !error && !data,
        error: error,
        data
    }
}
