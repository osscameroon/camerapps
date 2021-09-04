import React, {memo} from "react";
import HeaderUI from "../../layout/header";
import HomeUI from "../home";
import FooterUI from "../../layout/footer";

const MainUI = () => {

    return (
        <>
            <HeaderUI />
            <HomeUI />
            <FooterUI />
        </>
    );

}

export default memo(MainUI);