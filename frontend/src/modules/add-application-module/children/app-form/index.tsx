import React, {memo, useEffect, useState} from 'react';
import {apiHost} from '../../../../constants';
import {useMutation} from '../../../../hooks/use-mutation';
import {FormProps} from '../../../../model/FormProps';
import AddAppController from "../../controller";
import InputBuilder from "../input-builder";
import CustomDropdown from "./../../../../common/searching/components/dropdown-category";
import UploadLogo from "./../upload-logo";
import {IApp} from "../../../../model/IApp";
import {AppFormUIWrapper} from './default';
import Button from "../../../../common/button";

interface AppFormUIProps {
    formProps: FormProps;
    id?: string;
}

const AppFormUI = ({formProps, id}: AppFormUIProps) => {

    const [action, {status, reset}] = useMutation(apiHost + "/applications" + (id ? `/${id}` : ""));
    const [defaultValue, setDefaultValue] = useState<IApp | null>(null);

    const getDefaultValue = async () => {
        const response = await fetch(apiHost + "/applications/" + id);
        const value = await response.json();
        setDefaultValue(value?.data ?? null);
    }

    useEffect(() => {
        if (id) {
            getDefaultValue();
        } else {
            setDefaultValue(null);
        }
    }, [id])

    return <AppFormUIWrapper
        onSubmit={formProps.handleSubmit((data: any) => AddAppController.onSubmit(data, action, defaultValue?.id), AddAppController.onErrors)}>
        <h2>Participate and add your application here</h2>
        <p><strong className="important">VERY IMPORTANT!</strong> <br/> Make sure to fill the form well before submit
            please. </p>

        {/*<section className={"section-block personal-info"}>*/}
        {/*    <h3>Personal info</h3>*/}
        {/*    <div className="basic-form personal-form">*/}
        {/*        <InputBuilder required={true} name={"author"} defaultValue={""} register={formProps.register}*/}
        {/*                   setValue={formProps.setValue} labelText={"Author"} placeholder={"Enter your name"}/>*/}
        {/*        <InputBuilder required={true} name={"website"} defaultValue={""} register={formProps.register}*/}
        {/*                   setValue={formProps.setValue} type={"text"} labelText={"Website or email"} placeholder={"Your website's link or email"}/>*/}
        {/*    </div>*/}
        {/*</section>*/}

        <section className={"section-block app-info"}>
            <h3>Application's infos</h3>
            <UploadLogo logo={defaultValue?.logoUrl} formProps={formProps}/>
            <div className="basic-form m-top">
                <InputBuilder invalid={formProps.errors?.["name"] !== undefined} required={false}
                              errors={formProps.errors} name={"name"} defaultValue={defaultValue?.name ?? ""}
                              register={formProps.register}
                              setValue={formProps.setValue} type={"text"} labelText={"Name"}
                              placeholder={"Enter the app's name"}/>
                <InputBuilder required={false} errors={formProps.errors} name={"websiteUrl"}
                              defaultValue={defaultValue?.websiteUrl ?? ""} register={formProps.register}
                              setValue={formProps.setValue} type={"url"} labelText={"Website"}
                              placeholder={"Your website's link"}/>
                <InputBuilder required={false} errors={formProps.errors} name={"playstoreUrl"}
                              defaultValue={defaultValue?.playstoreUrl ?? ""} register={formProps.register}
                              setValue={formProps.setValue} type={"url"} labelText={"Play store's url"}
                              placeholder={"https://..."}/>
                <InputBuilder required={false} errors={formProps.errors} name={"appstoreUrl"}
                              defaultValue={defaultValue?.appstoreUrl ?? ""} register={formProps.register}
                              setValue={formProps.setValue} type={"url"} labelText={"App store's url"}
                              placeholder={"https://..."}/>
                <CustomDropdown defaultValue={defaultValue?.categoryId ?? "all"} form={formProps} name={"categoryId"}
                                url={apiHost + "/categories"} type={"CATEGORY"}/>
                <CustomDropdown defaultValue={defaultValue?.genreId ?? "all"} form={formProps} name={"genreId"}
                                url={apiHost + "/genres"} type={"GENDER"}/>
            </div>
            <div className="basic m-top">
                <InputBuilder required={false} errors={formProps.errors} name={"tags"}
                              defaultValue={defaultValue?.tags ?? ""} register={formProps.register}
                              setValue={formProps.setValue} elementType={"textarea"} labelText={"Tags"}
                              placeholder={"Add some tags"}/>
            </div>
        </section>

        <section className={"section-block app-info"}>
            <h3>Social media</h3>
            <div className="basic-form">
                <InputBuilder required={false} errors={formProps.errors} name={"githubUrl"}
                              defaultValue={defaultValue?.githubUrl ?? ""} register={formProps.register}
                              setValue={formProps.setValue} type={"url"} labelText={"Github's account"}
                              placeholder={"https://..."}/>
                <InputBuilder required={false} errors={formProps.errors} name={"slackUrl"}
                              defaultValue={defaultValue?.slackUrl ?? ""} register={formProps.register}
                              setValue={formProps.setValue} type={"url"} labelText={"Slack's account"}
                              placeholder={"https://..."}/>
                <InputBuilder required={false} errors={formProps.errors} name={"telegramUrl"}
                              defaultValue={defaultValue?.telegramUrl ?? ""} register={formProps.register}
                              setValue={formProps.setValue} type={"url"} labelText={"Telegram's account"}
                              placeholder={"https://..."}/>
                <InputBuilder required={false} errors={formProps.errors} name={"dikaloUrl"}
                              defaultValue={defaultValue?.dikaloUrl ?? ""} register={formProps.register}
                              setValue={formProps.setValue} type={"url"} labelText={"Dikalo's account"}
                              placeholder={"https://..."}/>
                <InputBuilder required={false} errors={formProps.errors} name={"whatsappUrl"}
                              defaultValue={defaultValue?.whatsappUrl ?? ""} register={formProps.register}
                              setValue={formProps.setValue} type={"url"} labelText={"Whatsapp's account"}
                              placeholder={"https://..."}/>
                <InputBuilder required={false} errors={formProps.errors} name={"facebookUrl"}
                              defaultValue={defaultValue?.facebookUrl ?? ""} register={formProps.register}
                              setValue={formProps.setValue} type={"url"} labelText={"facebook's account"}
                              placeholder={"https://..."}/>
                <InputBuilder required={false} errors={formProps.errors} name={"twitterUrl"}
                              defaultValue={defaultValue?.twitterUrl ?? ""} register={formProps.register}
                              setValue={formProps.setValue} type={"url"} labelText={"Twitter's account"}
                              placeholder={"https://..."}/>
                <InputBuilder required={false} errors={formProps.errors} name={"linkedinUrl"}
                              defaultValue={defaultValue?.linkedinUrl ?? ""} register={formProps.register}
                              setValue={formProps.setValue} type={"url"} labelText={"Linkedin's account"}
                              placeholder={"https://..."}/>
            </div>
        </section>

        <section className={"section-block app-more"}>
            <h3>Tell us more about application</h3>
            <div className="basic">
                <InputBuilder required={false} errors={formProps.errors} name={"description"}
                              defaultValue={defaultValue?.description ?? ""} register={formProps.register}
                              setValue={formProps.setValue} elementType={"textarea"} labelText={"Description"}
                              placeholder={"Tell us more about your app"}/>
            </div>
        </section>

        <div className="actions">
            {
                status === "loading" ? <>Loading...</> :
                    <Button visual={"plain"} type={"submit"}>Save this application</Button>
            }
            <Button visual={"link"} type={"reset"} size={"small"} onClick={reset}>Cancel</Button>
        </div>
    </AppFormUIWrapper>

}

export default memo(AppFormUI);
