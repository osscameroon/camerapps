import React, {memo, useEffect} from 'react';
import styled from "styled-components";
import {FieldElement, FieldName, FieldValues, Ref} from "react-hook-form/dist/types/fields";
import {RegisterOptions} from "react-hook-form/dist/types/validator";
import {SetFieldValue, SetValueConfig} from "react-hook-form/dist/types/form";

const InputTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  input, textarea {
    padding: .7em 1em;
    border: 1px solid #000;
    outline: none;
    border-radius: 10px;
    transition: all .2s 0s ease-in-out;
    font-size: .9em;
    
    &:focus {
      border-width: 2px;
    }
  }
`;

export type InputType = "textarea" | "input";

interface InputTextProps <TFieldValues extends FieldValues = FieldValues> {
    name: string;
    labelText: string;
    defaultValue?: string;
    type?: string;
    elementType?: InputType;
    rows?: number;
    required: boolean;
    placeholder?: string;
    register<TFieldElement extends FieldElement<TFieldValues>>(ref: (TFieldElement & Ref) | null, rules?: RegisterOptions): void;
    setValue(name: FieldName<TFieldValues>, value: SetFieldValue<TFieldValues>, config?: SetValueConfig): void;
}

const InputBuilder = ({name, labelText, defaultValue = "", rows = 4, register, type = "text", placeholder = "", required = false, elementType = "input"}: InputTextProps) => {

    register({name}, {required});

    const constructElement = () => {
        switch (elementType) {
            case "textarea":
                return <textarea
                    name={name}
                    rows={rows}
                    required={required}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                />
                break;
            case "input":
                return <input
                    type={type}
                    name={name}
                    required={required}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                />
                break;
        }
    }

    return <InputTextWrapper>
        <label htmlFor={name}>{labelText}</label>
        {constructElement()}
    </InputTextWrapper>

}

export default memo(InputBuilder);