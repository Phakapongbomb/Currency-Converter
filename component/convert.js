import React from "react";
import Geninput from "./Geninput";
import { useSelector } from "react-redux";
import css from "../public/css/convert.module.css";

const convert = () => {
    const state = useSelector((state) => state.home);
    const { amount, from, to } = state;
    return (
        <>
            <div className={css.container_card}>
                <div className="menu_bar">
                    <div className="menu_convert">
                        <img className="ic_convert" src="" />
                        <div className="text_convert">Convert</div>
                    </div>
                </div>
                <div className="box_content">
                    <Geninput name={"amount"} value={amount} label={"Amout"} />
                    <div className="box_convert">
                        <Geninput name={"from"} value={from} label={"From"} />
                        <Geninput name={"to"} value={to} label={"To"} />
                    </div>
                </div>
                <div className="box_value"></div>
                <div className="group_btn"></div>
            </div>
        </>
    );
};

export default convert;
