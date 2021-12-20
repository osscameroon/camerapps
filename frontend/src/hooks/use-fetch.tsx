import {useEffect, useReducer, useRef} from "react";
import {ActionType} from "../model/ActionType";

export const useFetch = (url: string) => {
    const cache: any = useRef({});
    const initialState = {
        status: 'fetching',
        error: null,
        data: [],
    };

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

    useEffect(() => {
        let cancelRequest = false;
        if (!url) return;

        const fetchData = async () => {
            dispatch({ type: 'LOADING' });
            if (cache?.current[url]) {
                const data = cache?.current[url];
                dispatch({ type: 'FETCHED', payload: data });
            } else {
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    cache.current[url] = data;
                    if (cancelRequest) return;
                    dispatch({ type: 'FETCHED', payload: data });
                } catch (error) {
                    if (cancelRequest) return;
                    dispatch({ type: 'FETCH_ERROR', payload: error });
                }
            }
        };

        fetchData();

        return function cleanup() {
            cancelRequest = true;
        };
    }, [url]);

    return state;
};