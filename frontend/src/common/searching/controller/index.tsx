import { BaseModel } from "../../../model/BaseModel";

class SearchingController<T extends BaseModel> {

    list: Map<string, any> = new Map<string, any>();

    formatData<T>(list: Array<any>, type: "CATEGORY" | "GENDER") {
        this.list.set("all", {
            id: "all",
            name: type === "CATEGORY" ? "All categories" : "All genders"
        })
        list.forEach(item => {
            this.list.set(item?.id, {
                id: item?.id,
                name: item?.name
            })
        });
        return this.list;
    }

    getList(_type: "CATEGORY" | "GENDER") {
        return Array.from(this.list.values() ?? []);
    }

    get getMapList() {
        return this.list;
    }

}

export default SearchingController;
