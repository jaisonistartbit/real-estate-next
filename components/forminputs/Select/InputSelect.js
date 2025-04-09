"use client"
import PropTypes from "prop-types"
import { FormGroup, Input } from "reactstrap";
import { MultiSelect } from "react-multi-select-component";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

export const InputSelect2 = ({
  options = [],
  value = "",
  setValue,
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
  labelClassName = "",
  name = null,
  id = null,
  heightClass = null,
  dynamicFormGroup = null,
}) => {
  const [uuidName, setUuidName] = useState(null);
  useEffect(() => {
    if (!id || !name) {
      setUuidName(uuid());
    }
  }, []);

  const DynamicElement = dynamicFormGroup ?? FormGroup;
  return (
    <DynamicElement
      className={` input_select_tab${heightClass ? "_" + heightClass : ""}`}
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
      <Input
        id={id ?? uuidName}
        className={` ${className} small  ${disabled ? "input_select_tab_disabled2" : ""
          }`}
        type={"select"}
        disabled={disabled}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          if (isTouched && validateHandler !== null) {
            validateHandler(e.target.value);
          }
        }}
        placeholder={placeholder}
        onBlur={() => {
          validateHandler && validateHandler(value);
          setIsTouched(true);
        }}
        valid={feedbackType === "success"}
        invalid={feedbackType === "error"}
        {...extraProps}
      >
        {options.map((optionitem, index) => {
          return (
            <option value={optionitem.value} className="small" key={index + "index_key"}>
              {optionitem.label}
            </option>
          );
        })}
      </Input>
      {feedbackType !== "none" && (
        <div className={feedbackType + "-feedback-class  m-0 p-0 ml-1 w-100"}>
          {feedbackMessage}
        </div>
      )}
    </DynamicElement>
  );
};

InputSelect2.propTypes = {
  className: PropTypes.any,
  disabled: PropTypes.bool,
  dynamicFormGroup: PropTypes.any,
  extraProps: PropTypes.object,
  feedbackMessage: PropTypes.string,
  feedbackType: PropTypes.string,
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
  value: PropTypes.string
}

const InputSelect = ({
  removeXIcon = true,
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
  setIsTouched = () => { },
  isRequired = false,
  extraProps = {},
  name = null,
  id = null,
  labelClassName = "",
  isLoading = false,
  hasExpand = false,
  ClearSelectedIcon = true,
  heightClass = null,
  dynamicFormGroup = null,
  inputCssClass = ''
}) => {

  const DynamicElement = dynamicFormGroup ?? FormGroup;
  const [uuidName, setUuidName] = useState(null);
  const [ClearSelectedIconObj, setClearSelectedIconObj] = useState({});
  useEffect(() => {
    if (!id || !name) {
      setUuidName(uuid());
    }
    if (removeXIcon) {
      setClearSelectedIconObj({
        ClearSelectedIcon: removeXIcon,
      });
    } else {
      setClearSelectedIconObj({});
    }
  }, []);
  return (
    <DynamicElement
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
        {...ClearSelectedIconObj}
        isLoading={isLoading}
        overrideStrings={{
          allItemsAreSelected:
            (options ?? []).find((obj) => {
              return obj?.value == value;
            })?.label ?? "Select..",
        }}
        closeOnChangedValue={true}
        options={options}
        value={options.filter((obj) => obj?.value == value)}
        id={id ?? uuidName}
        disabled={disabled}
        hasSelectAll={false}
        onChange={(e) => {
          let newE = (e ?? []).filter((obj) => obj?.value != value);
          let singleValue = (newE ?? []).length > 0 ? newE[0]?.value : "";

          setValue(singleValue);
          if (isTouched && validateHandler !== null) {
            validateHandler(singleValue);
          }
        }}
        onMenuToggle={() => {
          setIsTouched(true);
        }}
        labelledBy="Select"
        className={inputCssClass}
        {...extraProps}
      />

      {feedbackType !== "none" && (
        <div className={feedbackType + "-feedback-class  m-0 p-0 ml-1 w-100"}>
          {feedbackMessage}
        </div>
      )}
    </DynamicElement>
  );
};

InputSelect.propTypes = {
  ClearSelectedIcon: PropTypes.bool,
  Select: PropTypes.bool,
  className: PropTypes.any,
  disabled: PropTypes.bool,
  dynamicFormGroup: PropTypes.any,
  extraProps: PropTypes.object,
  feedbackMessage: PropTypes.any,
  feedbackType: PropTypes.any,
  hasExpand: PropTypes.bool,
  heightClass: PropTypes.any,
  id: PropTypes.any,
  isLoading: PropTypes.bool,
  isRequired: PropTypes.bool,
  isTouched: PropTypes.any,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  name: PropTypes.any,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  removeXIcon: PropTypes.bool,
  reset: PropTypes.any,
  setIsTouched: PropTypes.func,
  setValue: PropTypes.func,
  validateHandler: PropTypes.func,
  value: PropTypes.any
}
export default InputSelect;
