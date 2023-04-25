import { memo, useState } from "react";
import styled from "styled-components";
import { FormProps } from "../../../../model/FormProps";
import InputBuilder from "./../input-builder";
import noImage from "./../../../../assets/images/no-image.png";
import { TError } from "../app-form";

const UploadLogoWrapper = styled.div`
  width: 250px;
  //background-color: #fafafa;
  border-radius: 10px;
  margin-right: 1em;

  display: flex;
  flex-direction: column;

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
  errors?: TError;
}

const Avatar = ({ img }: { img: string }) => {
  return (
    <div className={"preview"}>
      <img src={img} alt="logo shower" />
    </div>
  );
};

const UploadLogo = ({ formProps, logo, errors }: UploadLogoProps) => {
  const [img, setImg] = useState<any | string>(logo ? logo : noImage);

  formProps.register({ name: "file" }, { required: true });

  const onChange = async ({
    target: {
      validity,
      files: [file],
    },
  }: {
    target: {
      validity: any;
      files: any;
    };
  }) => {
    if (validity.valid) {
      setImg(URL.createObjectURL(file));
      const formData = new FormData();
      formData.append("file", file);
      formProps.setValue("file", file);
    }
  };

  return (
    <UploadLogoWrapper>
      <Avatar img={img} />
      <InputBuilder
        errors={formProps?.errors}
        elementType={"file"}
        onChange={onChange}
        required={false}
        name={"file"}
        defaultValue={""}
        register={formProps.register}
        setValue={formProps.setValue}
        type={"file"}
        labelText={""}
        placeholder={"Enter the logo's url"}
      />
      {errors && errors?.["file"] && (
        <span className={"error-message"}>{errors["file"]?.message}</span>
      )}
    </UploadLogoWrapper>
  );
};

export default memo(UploadLogo);
