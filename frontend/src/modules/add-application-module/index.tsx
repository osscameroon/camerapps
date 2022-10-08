import {memo} from "react";
import styled from "styled-components";
import illustration from "../../assets/images/banner.jpg";
import AppFormUI from "./children/app-form";
import AddAppController from "./controller";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {AddingAppProps} from "../../model/AddingAppProps";
import {useParams} from "react-router-dom";

const AppFormWrapper = styled.div`
  display: flex;

  .illus {
    width: 50%;
    height: calc(100vh - 60px);

    img {
      width: 100%;
      height: 100%;
      object-position: top right;
      object-fit: cover;
    }
  }

  ._btn {
    border: 2px solid #fff;
    border-radius: 50px;
    padding: 1em;
    font-size: .9em;

    text-decoration: none;
    color: #000;

    transition: all .3s 0s ease-in-out;

    &._btn-primary {
      background-color: #000;
      color: #fff;
    }

    &._btn-secondary {
      background-color: transparent;

      &:hover {
        background-color: #ff4848;
        color: #fff;
      }
    }
  }
`;

const AddApplicationModule = () => {

    const {register, setValue, setError, handleSubmit, reset} = useForm<AddingAppProps>({
        resolver: yupResolver(AddAppController.MySchema)
    });
    const {id} = useParams<{id: string}>();

    const form = {register, setValue, setError, handleSubmit, reset};

    return (
        <AppFormWrapper>
            <div className="illus">
                <img src={illustration} alt="Illustration form image"/>
            </div>
            <AppFormUI id={id} formProps={form}/>
        </AppFormWrapper>
    );

}

export default memo(AddApplicationModule);
