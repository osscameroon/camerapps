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
    cursor: number | undefined;

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
            clearInput: action,
            cursor: observable,
            setCursor: action,
            getCursor: computed
        })
    }

    get getList() {
        return Array.from(this.list.values() ?? []);
    }

    setCursor(cursor: number | undefined) {
        this.cursor = cursor;
    }

    get getCursor() {
        return this.cursor;
    }

    clearInput() {
        this.searchInput = null;
    }

    clearStore() {
        this.searchInput = null;
        this.resultSearch = new Map<string, IApp>([]);
        this.list = new Map<string, IApp>([]);
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

    makeSearch() {
        this.resultSearch.clear();
        const values = Array.from(this.list.keys() ?? []);
        values.forEach(item => {
            const key = item.toLowerCase();
            let nameFound = true;
            let categoryFound = true;
            let genderFound = true;
            if(this.searchInput?.name) {
                nameFound = key.includes((this.searchInput?.name).toLowerCase());
            }
            if(this.searchInput?.categoryId) {
                if(this.searchInput?.categoryId.toLocaleLowerCase() === "all") {
                    categoryFound = true;
                } else {
                    categoryFound = key.includes(this.searchInput?.categoryId ?? "all");
                }
            }
            if(this.searchInput?.genderId) {
                if(this.searchInput?.genderId.toLocaleLowerCase() === "all") {
                    genderFound = true;
                } else {
                    genderFound = key.includes(this.searchInput?.genderId ?? "all");
                }
            }
            if(nameFound && categoryFound && genderFound) {
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
