import React, {memo} from "react";
import { Donation } from "./style/default";

const DonationButton = () => {

    return (
        <Donation href={"/"}>Make a donation</Donation>
    );

}

export default memo(DonationButton);