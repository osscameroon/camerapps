export type ActionType = {
    type: "LOADING" | "FETCHED" | "FETCH_ERROR",
    payload?: any;
}