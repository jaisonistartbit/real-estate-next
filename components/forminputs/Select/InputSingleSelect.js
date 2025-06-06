"use client";

import PropTypes from "prop-types";
import { MultiSelect } from "react-multi-select-component";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

const InputSingleSelect = ({
  options = [],
  value = [],
  setValue,
  placeholder = "Select",
  feedbackMessage = "",
  feedbackType = "none", // "none" | "error" | "success"
  label = "",
  validateHandler = null,
  reset = null,
  disabled = false,
  className = "",
  isTouched = false,
  setIsTouched = () => { },
  isRequired = false,
  extraProps = {},
  name = null,
  id = null,
  labelClassName = "",
  heightClass = "", // e.g., "h-10"
  hasExpand = false,
}) => {
  const [uuidName, setUuidName] = useState("");

  useEffect(() => {
    if (!id || !name) {
      setUuidName(uuid());
    }
  }, [id, name]);

  const controlId = id ?? uuidName;

  return (
    <div
      className={`flex flex-col multi-select-input w-full ${className} ${hasExpand ? "expand-multiple-select-dropdown" : ""}`}
    >
      {label && (
        <label
          htmlFor={controlId}
          className={`ml-1 text-sm font-medium text-gray-800 truncate ${labelClassName}`}
        >
          {label} {isRequired && <span className="text-red-600">*</span>}
        </label>
      )}

      <MultiSelect
        overrideStrings={{
          allItemsAreSelected:
            (value ?? []).length > 0 ? value[0]["label"] : "",
          selectSomeItems: placeholder,
        }}
        closeOnChangedValue={true}
        options={options}
        value={value}
        disabled={disabled}
        id={controlId}
        hasSelectAll={false}
        onChange={(e) => {
          const newValue = e.filter(
            (obj1) => !value.some((obj2) => obj1.value === obj2.value)
          );
          setValue(newValue);
          if (isTouched && validateHandler) {
            validateHandler(newValue);
          }
        }}
        onMenuToggle={() => {
          setIsTouched(true);
        }}
        labelledBy={placeholder}
        className={`mt-1 ${heightClass} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
        {...extraProps}
      />

      {feedbackType !== "none" && (
        <p
          className={`text-xs mt-1 ml-1 ${feedbackType === "error"
              ? "text-red-500"
              : feedbackType === "success"
                ? "text-green-500"
                : ""
            }`}
        >
          {feedbackMessage}
        </p>
      )}
    </div>
  );
};

InputSingleSelect.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.array,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  feedbackMessage: PropTypes.string,
  feedbackType: PropTypes.string,
  label: PropTypes.string,
  validateHandler: PropTypes.func,
  reset: PropTypes.any,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  isTouched: PropTypes.bool,
  setIsTouched: PropTypes.func,
  isRequired: PropTypes.bool,
  extraProps: PropTypes.object,
  name: PropTypes.string,
  id: PropTypes.string,
  labelClassName: PropTypes.string,
  heightClass: PropTypes.string,
  hasExpand: PropTypes.bool,
};

export default InputSingleSelect;
