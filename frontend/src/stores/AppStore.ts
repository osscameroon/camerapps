import {action, computed, makeObservable, observable } from "mobx";
import { IApp } from "../model/IApp";

interface ISearchInput {
    name?: string;
    categoryId?: string;
    genderId?: string;
}

class AppStore {

    list: Map<string, IApp> = new Map<string, IApp>([]);
    resultSearch: Map<string, IApp> = new Map<string, IApp>([]);
    searchInput: ISearchInput | null = null;

    constructor() {
        makeObservable(this, {
            list: observable,
            searchInput: observable,
            getList: computed,
            setList: action,
            resultSearch: observable,
            makeSearch: action,
            setSearchInput: action,
            getSearchResults: computed,
            clearInput: action
        })
    }

    get getList() {
        return Array.from(this.list.values() ?? []);
    }
    
    clearInput () {
        this.searchInput = null;
    }

    async setSearchInput(name: string, value: string) {
        this.searchInput = await {
            ...this.searchInput,
            [name]: value
        }
        this.makeSearch();
    }

    setList(apps: Array<IApp>) {
        apps.forEach(item => {
            this.list.set(item?.name + "/" + item?.genreId + "/" + item?.categoryId, item);
        })
    }

    makeSearch() {
        this.resultSearch.clear();
        const values = Array.from(this.list.keys() ?? []);
        values.forEach(item => {
            const key = item.toLowerCase();
            const isFound = key.includes((this.searchInput?.name ?? "").toLowerCase())
                || key.includes(this.searchInput?.categoryId ?? "all")
                || key.includes(this.searchInput?.genderId ?? "all");
            if(isFound) {
                const elt: any = this.list.get(item);
                this.resultSearch.set(elt?.name + "/" + elt?.genreId + "/" + elt?.categoryId, elt);
            }
        });
    }

    get getSearchResults() {
        return Array.from(this.resultSearch.values() ?? []);
    }
}

export default new AppStore();
