export type MutationType = {
    type: "LOADING" | "DONE" | "MUTATION_ERROR" | "idle",
    payload?: any;
}
