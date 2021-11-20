import * as yup from "yup";
import {AddingAppProps} from "../../../model/AddingAppProps";

class AddAppController {
    private readonly ADDING_APP_FIELDS: AddingAppProps = {
        name: "name",
        description: "description",
        email: "email",
        logo: "logo",
        slack: "slack",
        facebook: "facebook",
        twitter: "twitter",
        linkedIn: "linkedIn",
        github: "github",
        author: "author"
    };

    get fields() {
        return this.ADDING_APP_FIELDS;
    }

    get MySchema() {
        return yup.object().shape({

        });
    }

    onErrors() {

    }

    onSubmit() {

    }

}

export default new AddAppController();