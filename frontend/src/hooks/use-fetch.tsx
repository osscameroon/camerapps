import {useCallback, useContext} from "react";
import {useEffect, useReducer, useRef} from "react";
import {ActionType} from "../model/ActionType";
import {HomeContext} from "../modules/home";
import {IApp} from "../model/IApp";

export const useFetch = (url: string) => {
    const cache: any = useRef({});
    const {setCursor} = useContext(HomeContext);
    const initialState: {
        status: "fetching" | "fetched" | "error",
        error: any,
        data: {
            data?: {
                items: IApp[],
                nextToken: number
            }
        } | []
    } = {
        status: 'fetching',
        error: null,
        data: [],
    };
    let cancelRequest = false;

    const [state, dispatch] = useReducer((state: any, action: ActionType) => {
        switch (action.type) {
            case 'LOADING':
                return { ...initialState, status: 'fetching' };
            case 'FETCHED':
                return { ...initialState, status: 'fetched', data: action.payload };
            case 'FETCH_ERROR':
                return { ...initialState, status: 'error', error: action.payload };
            default:
                return state;
        }
    }, initialState);

    const fetchList = useCallback(() => {
        const fetchData = async (refetchUrl?: string, cursor?: number) => {
            console.log("cursor >>> ", cursor);
            const finalUrl = refetchUrl ? refetchUrl : url;
            dispatch({ type: 'LOADING' });
            if (cache?.current[finalUrl]) {
                const data = cache?.current[finalUrl];
                dispatch({ type: 'FETCHED', payload: data });
            } else {
                try {
                    console.log("cursor>>>", cursor);
                    const response = await fetch(`${finalUrl}`);
                    const data = await response.json();
                    cache.current[finalUrl] = data?.data?.items;
                    if(cursor !== data?.data?.nextToken) {
                        setCursor(data?.data?.nextToken);
                    }
                    if (cancelRequest) return;
                    dispatch({ type: 'FETCHED', payload: data?.data?.items ?? [] });
                } catch (error) {
                    if (cancelRequest) return;
                    dispatch({ type: 'FETCH_ERROR', payload: error });
                }
            }
        };

        fetchData(undefined);
    }, [])

    useEffect(() => {
        if (!url) return;

        fetchList();

        return function cleanup() {
            cancelRequest = true;
        };
    }, [fetchList]);

    return {
        ...state,
        refetch: fetchList
    };
};
