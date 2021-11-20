import {memo} from "react";
import styled from "styled-components";
import illustration from "./../../assets/images/banner.jpg";
import AppFormUI from "./children/app-form";
import AddAppController from "./controller";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

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
`;

const AddApplicationModule = () => {

    const form = useForm({
        resolver: yupResolver(AddAppController.MySchema)
    });

    return (
        <AppFormWrapper>
            <div className="illus">
                <img src={illustration} alt="Illustration form image"/>
            </div>
            <AppFormUI formProps={form} />
        </AppFormWrapper>
    );

}

export default memo(AddApplicationModule);