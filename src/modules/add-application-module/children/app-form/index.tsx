import React, {memo} from 'react';
import styled from "styled-components";
import {FormProps} from "../../../../model/FormProps";
import AddAppController from "./../../controller";

const AppFormUIWrapper = styled.form`
  padding: 2em;
  width: 100vw;

  h2 {
    font-size: 2.3em;
    margin-bottom: .2em;
  }
  
  p {
    width: 50%;
  }
  
  .section-block {
    margin-bottom: 2em;
    
    h3 {
      font-size: 1.9em;
      margin-bottom: .5em;
    }
    
    .basic-form {
      padding: 1em;
      background-color: #f1f1f1;
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

            </div>
        </section>

        <section className={"section-block app-info"}>
            <h3>Application's infos</h3>
            <div className="basic-form">

            </div>
        </section>
    </AppFormUIWrapper>

}

export default memo(AppFormUI);