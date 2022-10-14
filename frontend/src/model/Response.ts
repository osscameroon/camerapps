export type TResponse<T> = {
    isLoading: boolean;
    error: Error;
    data: T
}