import React, {memo} from 'react';
import styled from "styled-components";
import { apiHost } from '../../../../constants';
import AddAppController from "../../controller";
import InputBuilder from "../input-builder";
import CustomDropdown from "./../../../../common/searching/components/dropdown-category";

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
    formProps: any;
}

const AppFormUI = ({formProps}: AppFormUIProps) => {

    return <AppFormUIWrapper onSubmit={formProps.handleSubmit(AddAppController.onSubmit, AddAppController.onErrors)}>
        <h2>Participate and add your application here</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores consequuntur dolores eveniet ex,
            excepturi impedit.</p>

        <section className={"section-block personal-info"}>
            <h3>Personal info</h3>
            <div className="basic-form personal-form">
                <InputBuilder required={true} name={"author"} defaultValue={""} register={formProps.register}
                           setValue={formProps.setValue} labelText={"Author"} placeholder={"Enter your name"}/>
                <InputBuilder required={true} name={"website"} defaultValue={""} register={formProps.register}
                           setValue={formProps.setValue} type={"text"} labelText={"Website or email"} placeholder={"Your website's link or email"}/>
            </div>
        </section>

        <section className={"section-block app-info"}>
            <h3>Application's infos</h3>
            <div className="basic-form">
                <InputBuilder required={true} name={"name"} defaultValue={""} register={formProps.register}
                           setValue={formProps.setValue} type={"text"} labelText={"Name"} placeholder={"Enter the app's name"}/>
                <InputBuilder required={true} name={"logo"} defaultValue={""} register={formProps.register}
                           setValue={formProps.setValue} type={"text"} labelText={"Logo"} placeholder={"Enter the logo's url"}/>
                <InputBuilder required={true} name={"playstore"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} type={"text"} labelText={"Play store's url"} placeholder={"https://..."}/>
                <InputBuilder required={true} name={"appstore"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} type={"text"} labelText={"App store's url"} placeholder={"https://..."}/>
                <CustomDropdown form={formProps} name={"category"} url={apiHost + "/categories"} type={"CATEGORY"}/>
                <CustomDropdown form={formProps} name={"gender"} url={apiHost + "/genres"} type={"GENDER"}/>
            </div>
            <div className="basic m-top">
                <InputBuilder required={false} name={"tags"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} elementType={"textarea"} labelText={"Tags"} placeholder={"Add some tags"}/>
            </div>
        </section>

        <section className={"section-block app-info"}>
            <h3>Social media</h3>
            <div className="basic-form">
                <InputBuilder required={false} name={"github"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} type={"link"} labelText={"Github's account"} placeholder={"https://..."}/>
                <InputBuilder required={false} name={"slack"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} type={"link"} labelText={"Slack's account"} placeholder={"https://..."}/>
                <InputBuilder required={false} name={"telegram"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} type={"link"} labelText={"Telegram's account"} placeholder={"https://..."}/>
                <InputBuilder required={false} name={"dikalo"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} type={"link"} labelText={"Dikalo's account"} placeholder={"https://..."}/>
                <InputBuilder required={false} name={"whatsapp"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} type={"link"} labelText={"Whatsapp's account"} placeholder={"https://..."}/>
                <InputBuilder required={false} name={"facebook"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} type={"link"} labelText={"facebook's account"} placeholder={"https://..."}/>
                <InputBuilder required={false} name={"linkedIn"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} type={"link"} labelText={"Github's account"} placeholder={"https://..."}/>
                <InputBuilder required={false} name={"Twitter"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} type={"link"} labelText={"Twitter's account"} placeholder={"https://..."}/>
                <InputBuilder required={false} name={"linkedin"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} type={"link"} labelText={"Linkedin's account"} placeholder={"https://..."}/>
            </div>
        </section>

        <section className={"section-block app-more"}>
            <h3>Tell us more about application</h3>
            <div className="basic">
                <InputBuilder required={false} name={"description"} defaultValue={""} register={formProps.register}
                              setValue={formProps.setValue} elementType={"textarea"} labelText={"Description"} placeholder={"Tell us more about your app"}/>
            </div>
        </section>

        <div className="actions">
            <button className={"_btn _btn-primary"} type={"submit"}>Save this application</button>
            <button className={"_btn _btn-secondary"} type={"reset"}>Cancel</button>
        </div>
    </AppFormUIWrapper>

}

export default memo(AppFormUI);
