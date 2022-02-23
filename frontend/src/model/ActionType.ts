export type ActionType = {
    type: "LOADING" | "FETCHED" | "FETCH_ERROR",
    payload?: any;
}

export type MutationType = {
    type: "LOADING" | "DONE" | "MUTATION_ERROR" | "idle",
    payload?: any;
}
