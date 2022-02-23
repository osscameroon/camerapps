import React, {memo} from 'react';
import styled from "styled-components";
import { apiHost } from '../../../../constants';
import { useMutation } from '../../../../hooks/use-mutation';
import { FormProps } from '../../../../model/FormProps';
import AddAppController from "../../controller";
import InputBuilder from "../input-builder";
import CustomDropdown from "./../../../../common/searching/components/dropdown-category";
import UploadLogo from "./../upload-logo";

const AppFormUIWrapper = styled.form`
  padding: 2em;
  width: 100vw;
  height: calc(100vh - 60px - 65px);
  overflow-y: scroll;

  h2 {
    font-size: 2.3em;
    margin-bottom: .2em;
  }

  p {
    width: 50%;
  }
  
  .m-top {
    margin-top: 1em;
  }

  .section-block {
    margin-bottom: 2em;

    h3 {
      font-size: 1.9em;
      margin-bottom: .5em;
    }

    .basic-form {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
    
    .basic, .basic-form {
      padding: 1em;
      background-color: #fafafa;
      border-radius: 10px;
    }

    .personal-form {

    }
  }
`;

interface AppFormUIProps {
    formProps: FormProps;
}

const AppFormUI = ({formProps}: AppFormUIProps) => {
    
    const [action, {status, error, data, reset}] = useMutation(apiHost + "/applications");

    return <AppFormUIWrapper onSubmit={formProps.handleSubmit((data: any) => AddAppController.onSubmit(data, action), AddAppController.onErrors)}>
        <h2>Participate and add your application here</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores consequuntur dolores eveniet ex,
            excepturi impedit.</p>

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
            <UploadLogo formProps={formProps} />
            <div className="basic-form m-top">
                <InputBuilder invalid={formProps.errors?.["name"] !== undefined} required={false} errors={formProps.errors} name={"name"} defaultValue={""} register={formProps.register}
                           setValue={formProps.setValue} type={"text"} labelText={"Name"} placeholder={"Enter the app's name"}/>
                <InputBuilder required={false} errors={formProps.errors} name={"websiteUrl"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} type={"url"} labelText={"Website"} placeholder={"Your website's link"}/>
                <InputBuilder required={false} errors={formProps.errors} name={"playstoreUrl"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} type={"url"} labelText={"Play store's url"} placeholder={"https://..."}/>
                <InputBuilder required={false} errors={formProps.errors} name={"appstoreUrl"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} type={"url"} labelText={"App store's url"} placeholder={"https://..."}/>
                <CustomDropdown form={formProps} name={"categoryId"} url={apiHost + "/categories"} type={"CATEGORY"}/>
                <CustomDropdown form={formProps} name={"genreId"} url={apiHost + "/genres"} type={"GENDER"}/>
            </div>
            <div className="basic m-top">
                <InputBuilder required={false} errors={formProps.errors} name={"tags"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} elementType={"textarea"} labelText={"Tags"} placeholder={"Add some tags"}/>
            </div>
        </section>

        <section className={"section-block app-info"}>
            <h3>Social media</h3>
            <div className="basic-form">
                <InputBuilder required={false} errors={formProps.errors} name={"githubUrl"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} type={"url"} labelText={"Github's account"} placeholder={"https://..."}/>
                <InputBuilder required={false} errors={formProps.errors} name={"slackUrl"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} type={"url"} labelText={"Slack's account"} placeholder={"https://..."}/>
                <InputBuilder required={false} errors={formProps.errors} name={"telegramUrl"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} type={"url"} labelText={"Telegram's account"} placeholder={"https://..."}/>
                <InputBuilder required={false} errors={formProps.errors} name={"dikaloUrl"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} type={"url"} labelText={"Dikalo's account"} placeholder={"https://..."}/>
                <InputBuilder required={false} errors={formProps.errors} name={"whatsappUrl"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} type={"url"} labelText={"Whatsapp's account"} placeholder={"https://..."}/>
                <InputBuilder required={false} errors={formProps.errors} name={"facebookUrl"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} type={"url"} labelText={"facebook's account"} placeholder={"https://..."}/>
                <InputBuilder required={false} errors={formProps.errors} name={"twitterUrl"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} type={"url"} labelText={"Twitter's account"} placeholder={"https://..."}/>
                <InputBuilder required={false} errors={formProps.errors} name={"linkedinUrl"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} type={"url"} labelText={"Linkedin's account"} placeholder={"https://..."}/>
            </div>
        </section>

        <section className={"section-block app-more"}>
            <h3>Tell us more about application</h3>
            <div className="basic">
                <InputBuilder required={false} errors={formProps.errors} name={"description"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} elementType={"textarea"} labelText={"Description"} placeholder={"Tell us more about your app"}/>
            </div>
        </section>

        <div className="actions">
            {
                status === "loading" ? <>Loading...</> : <button className={"_btn _btn-primary"} type={"submit"}>Save this application</button>
            }
            <button className={"_btn _btn-secondary"} type={"reset"} onClick={reset}>Cancel</button>
        </div>
    </AppFormUIWrapper>

}

export default memo(AppFormUI);
