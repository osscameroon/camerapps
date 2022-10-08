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
        const formData = new FormData();

        if(body?.file) {
            body = {
                ...body,
                ...body?.file
            }
        }
        Object.entries(body).forEach((item) => {
            formData.append(item[0], item[1] as any);
        });

        dispatch({ type: 'LOADING' });
        if (cache?.current[url]) {
            const data = cache?.current[url];
            dispatch({ type: 'DONE', payload: data });
        } else {
            try {
                console.log(body, formData.get("name"));
                const res = await axios.request({
                    url: url,
                    data: formData,
                    method: method,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(async (res: any) => {
                    console.log("res", res);
                    const data = await onSuccess(res);
                    if (cancelRequest) return;
                    dispatch({ type: 'DONE', payload: data });
                }).catch(onError);
            } catch (error) {
                if (cancelRequest) return;
                dispatch({ type: 'MUTATION_ERROR', payload: error });
            }
        }
        dispatch({ type: 'idle' });
    };

    return [action, {
        ...state,
        reset: onReset
    }];
}
