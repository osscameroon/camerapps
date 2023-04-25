import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { BaseModel } from "../../../../model/BaseModel";
import { size } from "../../../../constants";
import SearchingController from "./../../controller";
import { FormProps } from "../../../../model/FormProps";
import AppStore from "../../../../stores/AppStore";
import { theme } from "../../../../theme";
import { useGet } from "../../../../hooks/use-get";
import { TFetchData } from "../../../../model/TFetchData";
import { IApp } from "../../../../model/IApp";

const DropdownWrapper = styled.div<{ form?: FormProps }>`
  width: ${(props) => (props.form ? "" : "50%")};

  display: flex;
  justify-content: center;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.borderColor};

  ${(props) =>
    props.form
      ? {
          marginTop: ".5em",
          borderRadius: "10px",
          backgroundColor: "#fff",
          border: "2px solid " + theme.borderColor,
        }
      : {
          backgroundColor: theme.secondary,
          padding: `.7rem 0`,
        }}
  .szh-menu-button {
    ${(props) =>
      props.form
        ? {
            width: "100%",
            justifyContent: "space-between",
            padding: ".7em 1em",
          }
        : {
            width: "100%",
            justifyContent: "space-between",
          }}
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    font-size: 0.9em;
  }

  .szh-menu {
    max-height: 250px;
    overflow-y: scroll;

    ${(props) =>
      props.form
        ? {
            width: "100%",
          }
        : undefined}
  }

  &:first-child {
    //border-right: 2px solid #ddd;
  }

  .activated {
    background-color: #000;
    color: #fff;
  }

  @media (max-width: ${size.tablet}) {
    &:first-child {
      border-right: none;
    }
  }
`;

export type CustomDropdownProps = {
  url: string;
  type: "CATEGORY" | "GENDER";
  name?: string;
  form?: FormProps;
  defaultValue?: string;
};

const CustomDropdown = <T extends BaseModel>({
  url,
  type,
  name,
  form,
  defaultValue,
}: CustomDropdownProps) => {
  const [choice, setChoice] = useState<T | null>(null);
  const { data: values, isLoading } = useGet<TFetchData<T>>(url);

  const ctrl = new SearchingController();

  const income = ctrl.formatData(values?.data ?? [], type);

  useEffect(() => {
    if (form) {
      form?.register({ name: name ?? "" }, { required: true });
    }
    setChoice(income.get("all"));
  }, []);

  useEffect(() => {
    setChoice((old) => old);
  }, [choice]);

  useEffect(() => {
    if (defaultValue) {
      let obj: T = ctrl.getMappedList.get(defaultValue);
      form?.setValue(name ?? "", obj?.id);
      setChoice((_old) => obj);
    }
    return () => {
      setChoice(null);
    };
  }, [defaultValue]);

  const selectHandler = (e: any) => {
    setChoice((_old) => income.get(e.value));
    if (name) {
      AppStore.setSearchInput(name, e.value);
      if (form) {
        form?.setValue(name, e.value);
      }
    }
  };

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <DropdownWrapper form={form}>
      <Menu
        onItemClick={selectHandler}
        overflow={"auto"}
        position={"initial"}
        menuButton={
          <MenuButton className={"szh-menu-button"}>
            {choice?.name} &nbsp;
            <FaChevronDown />
          </MenuButton>
        }
        transition
      >
        {(ctrl.getList() ?? []).map((item: IApp, index) => {
          return (
            <MenuItem
              className={item?.id === choice?.id ? "activated" : ""}
              key={index}
              value={item?.id}
            >
              {item.name}
            </MenuItem>
          );
        })}
      </Menu>
    </DropdownWrapper>
  );
};

export default memo(CustomDropdown);
