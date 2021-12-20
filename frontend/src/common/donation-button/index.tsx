import React, {memo} from "react";
import { Donation } from "./style/default";
import {FaDonate} from "react-icons/fa";

const DonationButton = () => {

    return (
        <Donation href={"https://opencollective.com/osscameroon/donate"} target={"_blank"}><FaDonate className={"donate-button__icon"} /><span>Make a donation</span></Donation>
    );

}

export default memo(DonationButton);