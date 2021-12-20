import {v4 as uuidv4} from "uuid";

class KeyBuilder {
    get build() {
        return uuidv4();
    }
}

export default new KeyBuilder();
