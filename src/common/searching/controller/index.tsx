import {IGender} from "../../../model/IGender";
import {ICategory} from "../../../model/ICategory";

class SearchingController {

    categories: Map<string, ICategory> = new Map<string, ICategory>([]);
    genders: Map<string, IGender> = new Map<string, IGender>([
        [
            "all",
            {
                id: "all",
                name: "All Gender"
            }
        ],
        [
            "1",
            {
                id: "1",
                name: "Web application"
            }
        ],
        [
            "2",
            {
                id: "2",
                name: "Mobile application"
            }
        ],
        [
            "3",
            {
                id: "3",
                name: "Bots"
            }
        ],
    ]);

    get getGenders() {
        return this.genders;
    }

    get getCategories() {
        return this.categories;
    }

}

export default new SearchingController();