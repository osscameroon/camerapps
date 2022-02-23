import * as yup from "yup";
import { urlRegex } from "../../../constants";
import {AddingAppProps} from "../../../model/AddingAppProps";

class AddAppController {
    private wrongUrlMessage = "This url is not right.";
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
        author: "author",
        gender: "gender",
        category: "category",
    };

    get fields() {
        return this.ADDING_APP_FIELDS;
    }

// .matches(urlRegex, this.wrongUrlMessage)

    get MySchema() {
        return yup.object().shape({
            genreId: yup.string().required(),
            categoryId: yup.string().required(),
            name: yup.string().required().min(2, "It should have at least 2 characters"),
            description: yup.string(),
            tags: yup.string(),
            websiteUrl: yup.string(),
            file: yup.mixed(),
            playstoreUrl: yup.string(),
            appstoreUrl: yup.string(),
            facebookUrl: yup.string(),
            dikaloUrl: yup.string(),
            slackUrl: yup.string(),
            telegramUrl: yup.string(),
            githubUrl: yup.string(),
            othersUrl: yup.string(),
            whatsappUrl: yup.string(),
            twitterUrl: yup.string(),
            linkedinUrl: yup.string(),
        });
    }

    onErrors(e: any) {
        console.log(e)
    }

    onError(e: any) {
        console.log(e)
    }

    async onSuccess(response: any) {
        const data = await response.json();
        return data;
    }

    onSubmit(data: any, action: any) {
        console.log(data);
        action({
            body: data,
            method: "POST",
            onSuccess: this.onSuccess,
            onError: this.onError
        })
    }

}

export default new AddAppController();
