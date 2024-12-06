import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "./store/home/homeSlice";
import css from "../public/css/Geninput.module.css";

const Geninput = (props) => {
    const {
        type = "text",
        className,
        value = "",
        name = "",
        label = "",
    } = props;

    const state = useSelector((state) => state.home);

    const setState = useDispatch();

    const onChange = (e) => {
        
        const value_input = e.target.value;
        console.log('111 value_input',value_input);
        setState(updateData({ key: name, value: value_input }));
    };
    const check_type_input = (type) => {
        switch (type) {
            case "text":
                return (
                    <label className={`container_input`}>
                        <div className="input_label">{label}</div>
                        <input
                            className="input_value"
                            value={`${value}`}
                            name={name}
                            onChange={onChange}
                        />
                    </label>
                );

            case "dropdown":
                return <div>Dropdown ยังไม่ได้ Implement</div>;

            default:
                return <div>ไม่มีประเภท input นี้</div>;
        }
    };

    return (
        <div className={`${css.Geninput} ${className ? className : ""}`}>
            {check_type_input(type)}
        </div>
    );
};

export default Geninput;
