import React, {memo} from 'react';
import styled from "styled-components";
import {FieldElement, FieldName, FieldValues, Ref} from "react-hook-form/dist/types/fields";
import {RegisterOptions} from "react-hook-form/dist/types/validator";
import {SetFieldValue, SetValueConfig} from "react-hook-form/dist/types/form";

const InputTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  input, textarea {
    padding: .9em 1em;
    outline: none;
    border-radius: 10px;
    border: 2px solid ${({theme}) => theme.borderColor};
    transition: all .2s 0s ease-in-out;
    font-size: .9em;
    background-color: ${({theme}) => theme.secondary};
    
    &:focus {
      border-width: 2px;
    }
  }
  
  .error-message {
    color: red;
    font-size: .8em;
  }
`;

export type InputType = "textarea" | "input" | "file";

interface InputTextProps <TFieldValues extends FieldValues = FieldValues> {
    name: string;
    labelText: string;
    defaultValue?: string;
    type?: string;
    errors: any;
    elementType?: InputType;
    rows?: number;
    required: boolean;
    invalid?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    register<TFieldElement extends FieldElement<TFieldValues>>(ref: (TFieldElement & Ref) | null, rules?: RegisterOptions): void;
    setValue(name: FieldName<TFieldValues>, value: SetFieldValue<TFieldValues>, config?: SetValueConfig): void;
}

const InputBuilder = ({name, labelText, defaultValue = "", rows = 4, register, type = "text", errors, placeholder = "", required = false, elementType = "input", onChange}: InputTextProps) => {

    // register({name}, {required});

    const constructElement = () => {
        switch (elementType) {
            case "textarea":
                return <textarea
                    name={name}
                    rows={rows}
                    ref={register}
                    required={required}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                />
            case "input":
                return <input
                    type={type}
                    name={name}
                    ref={register}
                    required={required}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                />
            case "file":
                return <input
                    type={type}
                    name={name}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                />
        }
    }

    return <InputTextWrapper>
        <label htmlFor={name}>{labelText}</label>
        {constructElement()}
        {
            (errors && errors[name]) && <span className={"error-message"}>{errors[name]?.message}</span>
        }
    </InputTextWrapper>

}

export default memo(InputBuilder);
