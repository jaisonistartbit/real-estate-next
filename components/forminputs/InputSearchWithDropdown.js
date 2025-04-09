"use client"
import PropTypes from "prop-types"
import { useEffect } from "react";
import { useState } from "react";
import { FormGroup, Input } from "reactstrap";
import { ReactComponent as SearchIcon } from "../../assets/icons/SearchIcon.svg";
import uuid from "react-uuid";
const InputSearchWithDropdown = ({
    value = "",
    setValue,
    clearable = true,
    disabled = false,
    className = "",
    options = [],
    Dropdownvalue = "",
    setDropdownValue,
    placeholder = "Select",
    feedbackType = "none",
    validateHandler = null,
    setIsTouched,
    isRequired = false,
    extraProps = {},
    id = null,
}) => {
    const [inp, setInp] = useState(value);
    useEffect(() => {
        if (inp.length === 0 || inp.length > 2) {
            setValue(inp);
        }
    }, [inp]);

    const [uuidName, setUuidName] = useState(null);
    useEffect(() => {
        if (!id) {
            setUuidName(uuid());
        }
    }, []);
    return (
        <FormGroup>
            <div style={{ position: "relative" }}>
                <Input
                    className={`has_left_add_on ${clearable && "has_right_add_on "
                        } ${className} table_search_height`}
                    disabled={disabled}
                    type="text"
                    value={inp}

                    onChange={(e) => {
                        let textvalue = e.target.value.trim();
                        const containsSpecialCharacters =
                            /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]+/.test(textvalue);
                        if (!containsSpecialCharacters) {
                            setInp(e.target.value);
                        }
                    }}
                    placeholder={
                        (placeholder !== "" || placeholder) ? placeholder : "Search..."
                    }
                />

                <SearchIcon className="input_addon_icon_left" />
                {clearable && (
                    <Input
                        id={id ?? uuidName}
                        className={` ${className} small input_addon_icon_right w-50`}
                        type={"select"}
                        disabled={disabled}
                        value={value}
                        onChange={(e) => {
                            setDropdownValue(e.target.value);
                            // if (isTouched && validateHandler !== null) {
                            //     validateHandler(e.target.value);
                            // }
                        }}
                        placeholder={placeholder}
                        // onBlur={() => {
                        //     validateHandler && validateHandler(value);
                        //     setIsTouched(true);
                        // }}
                        {...extraProps}
                    >


                        {options.map((optionitem, index) => {
                            return (
                                <option value={optionitem.value} style={{ fontSize: "12px" }} key={index + "index_key"}>
                                    {optionitem.label}
                                </option>
                            );
                        })}
                    </Input>
                )}



            </div>
        </FormGroup>
    );
};

InputSearchWithDropdown.propTypes = {
    Dropdownvalue: PropTypes.string,
    className: PropTypes.string,
    clearable: PropTypes.bool,
    disabled: PropTypes.bool,
    extraProps: PropTypes.object,
    feedbackType: PropTypes.string,
    id: PropTypes.any,
    isRequired: PropTypes.bool,
    options: PropTypes.array,
    placeholder: PropTypes.string,
    setDropdownValue: PropTypes.func,
    setIsTouched: PropTypes.any,
    setValue: PropTypes.func,
    validateHandler: PropTypes.any,
    value: PropTypes.string
}

export default InputSearchWithDropdown;
