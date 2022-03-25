import React, {memo, useState} from "react";
import styled from "styled-components";
import { FormProps } from "../../../../model/FormProps";
import InputBuilder from "./../input-builder";
import noImage from "./../../../../assets/images/no-image.png";

const UploadLogoWrapper = styled.div`
  width: 250px;
  float: left;
  background-color: #fafafa;
  border-radius: 10px;
  padding: 1em;
  margin-right: 1em;

  .preview {
    height: 100px;
    width: 100px;
    background-color: #fff;
    margin-right: 2em;
    position: relative;
    margin-bottom: 1em;
    border-radius: 10px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: contain;
    }
  }
`;

interface UploadLogoProps {
    formProps: FormProps;
    logo?: string;
}

const Avatar = ({img}: {img: any}) => {
    return <div className={"preview"}>
        <img src={img} alt="logo shower"/>
    </div>
}

const UploadLogo = ({formProps, logo}: UploadLogoProps) => {

    const [img, setImg] = useState<any | string>(logo ? logo : noImage);

    formProps.register({name: "file"}, {required: true});

    const onChange = async ({target: {validity, files: [file]}}: {
        target: {
            validity: any,
            files: any
        }
    }) => {
        if(validity.valid) {
            setImg(URL.createObjectURL(file));
            const formData = new FormData();
            formData.append("file", file);
            // console.log(file, formData, reader.readAsBinaryString(file));
            formProps.setValue("file", file);
        }
    }

    return <UploadLogoWrapper>
        <Avatar img={img} />
        <InputBuilder errors={formProps?.errors} elementType={"file"} onChange={onChange} required={false} name={"file"} defaultValue={""} register={formProps.register}
                      setValue={formProps.setValue} type={"file"} labelText={""} placeholder={"Enter the logo's url"}/>
    </UploadLogoWrapper>

}

export default memo(UploadLogo);
