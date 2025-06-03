"use client";

import PropTypes from "prop-types";
import { MultiSelect } from "react-multi-select-component";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

const InputMultipleSelect = ({
  options = [],
  value = [],
  setValue,
  placeholder = "Select...",
  feedbackMessage = "",
  feedbackType = "none", // "none", "error", "success"
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
  hasSelectAll = false,
  isLoading = false,
  labelClassName = "",
  overrideStrings = {},
  heightClass = "", // Tailwind height class like "h-10"
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
      className={`flex multi-select-input flex-col w-full ${className} ${hasExpand ? "expand-multiple-select-dropdown" : ""
        }`}
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
        isLoading={isLoading}
        options={options}
        value={Array.isArray(value) ? value : []}
        id={controlId}
        disabled={disabled}
        hasSelectAll={hasSelectAll}
        onChange={(e) => {
          setValue(e);
          if (isTouched && validateHandler) {
            validateHandler(e);
          }
        }}
        onMenuToggle={() => {
          validateHandler && validateHandler(value);
          setIsTouched(true);
        }}
        labelledBy={placeholder}
        overrideStrings={{
          ...overrideStrings,
          selectSomeItems: placeholder,
        }}
        className={`mt-1 ${heightClass} ${disabled ? "opacity-60 cursor-not-allowed" : ""
          }`}
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

InputMultipleSelect.propTypes = {
  Select: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  extraProps: PropTypes.object,
  feedbackMessage: PropTypes.string,
  feedbackType: PropTypes.string,
  hasExpand: PropTypes.bool,
  hasSelectAll: PropTypes.bool,
  heightClass: PropTypes.string,
  id: PropTypes.string,
  isLoading: PropTypes.bool,
  isRequired: PropTypes.bool,
  isTouched: PropTypes.bool,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array.isRequired,
  overrideStrings: PropTypes.object,
  placeholder: PropTypes.string,
  reset: PropTypes.any,
  setIsTouched: PropTypes.func,
  setValue: PropTypes.func.isRequired,
  validateHandler: PropTypes.func,
  value: PropTypes.array,
};

export default InputMultipleSelect;
