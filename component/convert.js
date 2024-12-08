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
                    <div className="menu_btn active">
                        <img className="ic_convert" src="" />
                        <div className="text_convert">Convert</div>
                    </div>
                    <div className="menu_btn">
                        <img className="ic_convert" src="" />
                        <div className="text_convert">Send</div>
                    </div>
                    <div className="menu_btn">
                        <img className="ic_convert" src="" />
                        <div className="text_convert">Charts</div>
                    </div>
                    <div className="menu_btn">
                        <img className="ic_convert" src="" />
                        <div className="text_convert">Alerts</div>
                    </div>
                </div>
                <div className="box_content">
                    <Geninput name={"amount"} value={amount} label={"Amout"} />
                    <div className="box_convert">
                        <Geninput type={`dropdown`} className={`from`} name={"from"} value={from} label={"From"} />
                        <Geninput type={`dropdown`} className={`to`} name={"to"} value={to} label={"To"} />
                        <div className="swip_currency"></div>
                    </div>
                </div>
                <div className={`group_value ${true ? 'before' : ''}`}>
                    {true ? (
                        <></>
                    ) : (
                        <div className="box_value">
                            <div className="from_value">
                                123.00 US Dollars =
                            </div>
                            <div className="to_value">116.38011 Euros</div>
                            <div className="from_rate">
                                1 USD = 0.946180 EUR
                            </div>
                            <div className="to_rate">1 EUR = 1.05688 USD</div>
                        </div>
                    )}
                    <div className="box_btn">
                        {true ? (
                            <div className="btn_convert">Convert</div>
                        ) : (
                            <>
                                <div className="text_detail">
                                    US Dollar to Euro conversion — Last updated
                                    Dec 8, 2024, 14:09 UTC
                                </div>
                                <div className="container_btn">
                                    <div className="btn btn_track">
                                        Track currency
                                    </div>
                                    <div className="btn btn_transfer_quote">
                                        View transfer quote
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default convert;
