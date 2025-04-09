"use client"
import PropTypes from "prop-types";
import { MultiSelect } from "react-multi-select-component";
import { FormGroup } from "reactstrap";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

const InputSingleSelect = ({
  options = [],
  value = "",
  setValue,
  Select = false,
  placeholder = "Select",
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
  labelClassName = "",
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
      className={` ${hasExpand ? "expand-multiple-select-dropdown" : ""} ${feedbackType === "error" ? "input-searchable-select-error" : ""
        }  input_select_tab${heightClass ? "_" + heightClass : ""} ${disabled ? "input_select_tab_disabled" : ""
        }`}
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
        overrideStrings={{
          allItemsAreSelected:
            (value ?? []).length > 0 ? value[0]["label"] : "",
        }}
        closeOnChangedValue={true}
        options={options}
        value={value}
        id={id ?? uuidName}
        disabled={disabled}
        hasSelectAll={false}
        onChange={(e) => {
          let newValue = e.filter(
            (obj1) => !value.some((obj2) => obj1.value === obj2.value)
          );
          setValue(newValue);
          if (isTouched && validateHandler !== null) {
            validateHandler(newValue);
          }
        }}
        onMenuToggle={() => {
          // validateHandler && validateHandler(value);
          setIsTouched(true);
        }}
        labelledBy="Select"
        className="  "
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

InputSingleSelect.propTypes = {
  Select: PropTypes.bool,
  className: PropTypes.any,
  disabled: PropTypes.bool,
  extraProps: PropTypes.object,
  feedbackMessage: PropTypes.string,
  feedbackType: PropTypes.string,
  hasExpand: PropTypes.bool,
  heightClass: PropTypes.any,
  id: PropTypes.any,
  isRequired: PropTypes.bool,
  isTouched: PropTypes.bool,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  name: PropTypes.any,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  reset: PropTypes.any,
  setIsTouched: PropTypes.func,
  setValue: PropTypes.func,
  validateHandler: PropTypes.func,
  value: PropTypes.any,
};

export default InputSingleSelect;
