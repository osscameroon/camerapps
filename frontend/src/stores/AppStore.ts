import {action, computed, makeObservable, observable} from "mobx";
import {IApp} from "../model/IApp";

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

    clearInput() {
        this.searchInput = null;
    }

    clearName() {
        this.searchInput = {
            ...this.searchInput,
            name: undefined
        };
        this.makeSearch();
    }

    async setSearchInput(name: string, value: string | undefined) {
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

    partSearch(isFound: boolean, key: any) {
        let checker = false;
        if (this.searchInput?.categoryId) {
            const isExists = key.includes(this.searchInput?.categoryId ? (this.searchInput?.categoryId === "all" ? "" : this.searchInput?.categoryId) : "");
            console.log("Search input >>> ", this.searchInput?.categoryId, this.searchInput?.name, isFound, key, isExists, isFound === true && isExists === true);
            checker = isFound ? ((isFound && isExists)) : isExists;
            if (checker) {
                if (this.searchInput?.genderId) {
                    checker = key.includes(this.searchInput?.genderId ? (this.searchInput?.genderId === "all" ? "" : this.searchInput?.genderId) : "");
                }
            }
        } else if (this.searchInput?.genderId) {
            const isExists = key.includes(this.searchInput?.genderId ? (this.searchInput?.genderId === "all" ? "" : this.searchInput?.genderId) : "");
            checker = isFound ? ((isFound && isExists)) : isExists;
            if (checker) {
                if (this.searchInput?.categoryId) {
                    checker = key.includes(this.searchInput?.categoryId ? (this.searchInput?.categoryId === "all" ? "" : this.searchInput?.categoryId) : "");
                }
            }
        }
        return checker;
    }

    get getResultsLength() {
        const list = Array.from(this.resultSearch.keys() ?? []);
        return list.length ?? 0;
    }

    makeSearch() {
        this.resultSearch.clear();
        const values = Array.from((this.list.keys()) ?? []);
        if(!this.searchInput?.name && !this.searchInput?.categoryId && !this.searchInput?.genderId) {
            this.clearInput();
        } else {
            values.forEach(item => {
                let isFound: boolean = false;
                const key = item.toLowerCase();
                const isNameExists = key.includes((this.searchInput?.name ?? "nothing").toLowerCase());
                isFound = this.partSearch(isNameExists, key);
                console.log("isFound >>> ", isFound);
                if (isFound) {
                    const elt: any = this.list.get(item);
                    this.resultSearch.set(elt?.name + "/" + elt?.genreId + "/" + elt?.categoryId, elt);
                }
            });
        }
    }

    get getSearchResults() {
        return Array.from(this.resultSearch.values() ?? []);
    }
}

export default new AppStore();
