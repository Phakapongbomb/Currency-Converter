import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "./store/home/homeSlice";
import css from "../public/css/Geninput.module.css";

const Geninput = (props) => {
    const {
        type = "text",
        className = "normal",
        value = "",
        name = "",
        label = "",
    } = props;

    const state = useSelector((state) => state.home);
    const setState = useDispatch();
    const onChange = (e) => {
        const value_input = e.target.value;
        setState(updateData({ key: name, value: `${value_input}` }));
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(true);
    };
    const dropdownRef = useRef(null);
    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const currency = [
        {
            currency: "AUD",
            currency_full: "Australian Dollar",
        },
        {
            currency: "USD",
            currency_full: "United States Dollar",
        },
        {
            currency: "EUR",
            currency_full: "Euro",
        },
        {
            currency: "JPY",
            currency_full: "Japanese Yen",
        },
        {
            currency: "GBP",
            currency_full: "British Pound",
        },
        {
            currency: "KRW",
            currency_full: "South Korean Won",
        },
        {
            currency: "CAD",
            currency_full: "Canadian Dollar",
        },
        {
            currency: "CHF",
            currency_full: "Swiss Franc",
        },
        {
            currency: "CNY",
            currency_full: "Chinese Yuan",
        },
        {
            currency: "HKD",
            currency_full: "Hong Kong Dollar",
        },
        {
            currency: "NZD",
            currency_full: "New Zealand Dollar",
        },
        {
            currency: "SGD",
            currency_full: "Singapore Dollar",
        },
    ];

    const check_type_input = (type) => {
        switch (type) {
            case "text":
                return (
                    <label
                        className={`container_input text ${
                            className ? className : ""
                        }`}
                    >
                        <div className="input_label">{label}</div>
                        <div className="inp_box">
                            $
                            <input
                                className="input_value"
                                value={value}
                                name={name}
                                onChange={onChange}
                                autoComplete="off"
                            />
                        </div>
                    </label>
                );

            case "dropdown":
                return (
                    <>
                        <div
                            className={`container_input dropdown ${
                                isOpen ? "active" : ""
                            } ${className ? className : ""}`}
                            onClick={toggleDropdown}
                            ref={dropdownRef}
                        >
                            <div className="input_label">{label}</div>
                            <input
                                className="input_value"
                                value={value}
                                onChange={onChange}
                                autoComplete="off"
                                readOnly
                            />
                            {isOpen ? (
                                <div className={`container_dropdown`}>
                                    {currency ? (
                                        currency.map((data, i) => {
                                            return (
                                                <div className="list_currency" key={i}>
                                                    <div className="flag"></div>
                                                    <div className="currency_name">
                                                        {data.currency}
                                                    </div>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    </>
                );

            default:
                return <div>ไม่มีประเภท input นี้</div>;
        }
    };

    return <div className={`${css.Geninput}`}>{check_type_input(type)}</div>;
};

export default Geninput;
