import React, {memo, useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import {FaChevronDown} from "react-icons/fa";
import {Menu, MenuButton, MenuItem} from "@szhsin/react-menu";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import {BaseModel} from "../../../../model/BaseModel";
import {IGender} from "../../../../model/IGender";
import KeyBuilder from "../../../../utils/KeyBuilder";
import {size} from "../../../../constants";

const DropdownWrapper = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: center;
  
  .szh-menu-button {
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    font-size: .9em;
  }
  
  &:first-child {
    border-right: 2px solid #ddd;
  }
`;

export interface CustomDropdownProps<R extends BaseModel> {
    data: Map<string, R>;
}

const CustomDropdown = <T extends BaseModel>({data}: CustomDropdownProps<T>) => {
    const [choice, setChoice] = useState<string | undefined>("");
    const [list, setList] = useState<T[]>();

    useEffect(() => {
        setList(Array.from(data.values()));
        setChoice(data.get("all")?.name);
    }, []);

    const selectHandler = useCallback((e: any) => {
        console.log(e);
        setChoice(data.get(e.value)?.name);
    }, [choice, setChoice]);

    return (
        <DropdownWrapper>
            <Menu
                onItemClick={selectHandler}
                overflow={"auto"}
                position={"initial"}
                menuButton={<MenuButton className={"szh-menu-button"}>{choice ?? "All"} &nbsp; <FaChevronDown/></MenuButton>} transition>
                {
                    (list ?? []).map((item: IGender) => {
                        return (
                            <MenuItem key={KeyBuilder.build} value={item.id}>{item.name}</MenuItem>
                        );
                    })
                }
            </Menu>
        </DropdownWrapper>
    );

}

export default memo(CustomDropdown);