import React, {memo, useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import {FaChevronDown} from "react-icons/fa";
import {Menu, MenuButton, MenuItem} from "@szhsin/react-menu";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import {BaseModel} from "../../../../model/BaseModel";
import KeyBuilder from "../../../../utils/KeyBuilder";
import {size} from "../../../../constants";
import { useFetch } from "../../../../hooks/use-fetch";
import SearchingController from "./../../controller";
import { FormProps } from "../../../../model/FormProps";
import AppStore from "../../../../stores/AppStore";

const DropdownWrapper = styled.div<{form?: FormProps}>`
  width: ${props => props.form ? "100%" : "50%"};
  height: 90%;
  display: flex;
  justify-content: center;
  
  ${props => props.form ? {
      marginTop: ".5em",
      borderRadius: "10px",
    backgroundColor: "#fff",
    border: "1px solid #000"
  } : undefined}
  
  .szh-menu-button {
    ${props => props.form ? {
        width: "100%",
        justifyContent: "space-between",
      padding: ".7em 1em"
    } : undefined}
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    font-size: .9em;
  }
  
  .szh-menu {
    max-height: 250px;
    overflow-y: scroll;

    ${props => props.form ? {
      width: "100%"
    } : undefined}
  }
  
  &:first-child {
    border-right: 2px solid #ddd;
  }
  
  .activated {
    background-color: #000;
    color: #fff;
  }

  @media (max-width: ${size.tablet}) {
    width: auto;
    
    &:first-child {
      border-right: none;
    }
  }
`;

export interface CustomDropdownProps<R extends BaseModel> {
    url: string;
    type: "CATEGORY" | "GENDER";
    name?: string;
    form?: FormProps;
}

const CustomDropdown = <T extends BaseModel>({url, type, name, form}: CustomDropdownProps<T>) => {
    const [choice, setChoice] = useState<T | null>(null);
    const {status, data: values, error} = useFetch(url);

    const ctrl = new SearchingController();

    const income = ctrl.formatData<T>(values.data ?? [], type);

    useEffect(() => {
        if(form) {
            form?.register({name: name ?? ""}, {required: true});
        }
        setChoice(income.get("all"));
    }, []);

    useEffect(() => {
        setChoice(old => old);
    }, [choice]);

    const selectHandler = (e: any) => {
        setChoice(old => income.get(e.value));
        if(name) {
            AppStore.setSearchInput(name, e.value);
            if(form) {
                form?.setValue(name, e.value);
            }
        }
    }

    return (
        <DropdownWrapper form={form}>
            <Menu onItemClick={selectHandler}
                overflow={"auto"}
                position={"initial"}
                menuButton={<MenuButton className={"szh-menu-button"}>{(choice?.name ?? "") ?? "All"} &nbsp; <FaChevronDown/></MenuButton>} transition>
                {
                    (ctrl.getList(type) ?? []).map((item: any) => {
                        return (
                            <MenuItem className={item?.id === choice?.id ? "activated" : ""} key={KeyBuilder.build} value={item.id}>{item.name}</MenuItem>
                        );
                    })
                }
            </Menu>
        </DropdownWrapper>
    );

}

export default memo(CustomDropdown);
