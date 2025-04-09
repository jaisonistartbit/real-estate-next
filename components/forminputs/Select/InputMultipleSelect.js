"use client"
import PropTypes from "prop-types";
import { MultiSelect } from "react-multi-select-component";
import { FormGroup } from "reactstrap";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

const InputMultipleSelect = ({
  options = [],
  value = "",
  setValue,
  Select = false,
  placeholder = "Select...",
  feedbackMessage = "",
  feedbackType = "none",
  label = "",
  validateHandler = null,
  reset = null,
  disabled = false,
  className,
  isTouched = false,
  setIsTouched,
  isRequired = false,
  extraProps = {},
  name = null,
  id = null,
  hasSelectAll = false,
  isLoading = false,
  labelClassName = "",
  overrideStrings = {},
  heightClass = null,
  hasExpand = false,
}) => {
  const [uuidName, setUuidName] = useState(null);
  useEffect(() => {
    if (!id || !name) {
      setUuidName(uuid());
    }
  }, []);
  return (
    <FormGroup
      className={` ${hasExpand ? "expand-multiple-select-dropdown" : ""} ${
        feedbackType === "error" ? "input-searchable-select-error" : ""
      }  input_select_tab${heightClass ? "_" + heightClass : ""} ${
        disabled ? "input_select_tab_disabled" : ""
      } `}
    >
      {label !== "" && (
        <label
          className={` ${labelClassName} ml-1  text-truncate w-100 `}
          htmlFor={name ?? uuidName}
          style={{
            userSelect: "none",
            fontSize: "12px",
            fontWeight: "500",
            color: "#0F0F0F",
          }}
        >
          {label} {isRequired && <span className="text-danger"> *</span>}
        </label>
      )}
      <MultiSelect
        isLoading={isLoading}
        options={options}
        value={value}
        id={id ?? uuidName}
        disabled={disabled}
        hasSelectAll={hasSelectAll}
        onChange={(e) => {
          setValue(e);
          if (isTouched && validateHandler !== null) {
            validateHandler(e);
          }
        }}
        onMenuToggle={() => {
          validateHandler && validateHandler(value);
          setIsTouched(true);
        }}
        labelledBy={placeholder}
        overrideStrings={{ ...overrideStrings, selectSomeItems: placeholder }}
        className=" "
        {...extraProps}
      />

      {feedbackType !== "none" && (
        <div className={feedbackType + "-feedback-class  m-0 p-0 ml-1 w-100"}>
          {feedbackMessage}
        </div>
      )}
    </FormGroup>
  );
};

InputMultipleSelect.propTypes = {
  Select: PropTypes.bool,
  className: PropTypes.any,
  disabled: PropTypes.bool,
  extraProps: PropTypes.object,
  feedbackMessage: PropTypes.string,
  feedbackType: PropTypes.string,
  hasExpand: PropTypes.bool,
  hasSelectAll: PropTypes.bool,
  heightClass: PropTypes.any,
  id: PropTypes.any,
  isLoading: PropTypes.bool,
  isRequired: PropTypes.bool,
  isTouched: PropTypes.any,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  name: PropTypes.any,
  options: PropTypes.array,
  overrideStrings: PropTypes.object,
  placeholder: PropTypes.string,
  reset: PropTypes.any,
  setIsTouched: PropTypes.func,
  setValue: PropTypes.func,
  validateHandler: PropTypes.func,
  value: PropTypes.any,
};

export default InputMultipleSelect;
