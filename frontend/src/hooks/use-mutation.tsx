import { useReducer, useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { MutationType } from "../model/ActionType";
import axios from "axios";

interface UseMutationOptions {
    body: any;
    method: "POST" | "DELETE";
    headers?: any;
    onSuccess: (res: any) => any;
    onError?: (error: any) => void;
}

export const useMutation = (url: string) => {
    const cache: any = useRef({});
    const initialState = {
        status: 'idle',
        error: null,
        data: [],
        reset: null
    };
    const [cancelRequest, setCancelRequest] = useState<boolean>(false);

    const [state, dispatch] = useReducer((state: any, action: MutationType) => {
        switch (action.type) {
            case 'LOADING':
                return { ...initialState, status: 'loading' };
            case 'DONE':
                return { ...initialState, status: 'done', data: action.payload };
            case 'MUTATION_ERROR':
                return { ...initialState, status: 'error', error: action.payload };
            default:
                return state;
        }
    }, initialState);

    useEffect(() => {
        return function cleanup() {
            console.log("reset")
            setCancelRequest(true);
        };
    }, []);

    let onReset = () => {
        dispatch({type: "idle", payload: []});
        setCancelRequest(true);
    }

    let action = async ({body, method, onError, onSuccess, headers}: UseMutationOptions) => {
        if (!url) return;

        if(body?.file) {
            console.log("file >>>");
            body = {
                ...body,
                ...body?.file
            }
        }

        console.log(body);

        dispatch({ type: 'LOADING' });
        if (cache?.current[url]) {
            const data = cache?.current[url];
            dispatch({ type: 'DONE', payload: data });
        } else {
            try {
                await axios.request({
                    url: url,
                    data: body,
                    method: method,
                    headers: headers ?? {
                        'Content-Type': 'multipart/form-data; boundary=camerapps'
                    }
                }).then(async (res: any) => {
                    const data = await onSuccess(res);
                    cache.current[url] = data;
                    if (cancelRequest) return;
                    dispatch({ type: 'DONE', payload: data });
                }).catch(onError);

            } catch (error) {
                if (cancelRequest) return;
                dispatch({ type: 'MUTATION_ERROR', payload: error });
            }
        }
    };

    return [action, {
        ...state,
        reset: onReset
    }];
}
