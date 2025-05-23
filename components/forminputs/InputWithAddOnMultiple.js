"use client"
import PropTypes from "prop-types";
import { FormGroup, Input } from "reactstrap";
import "./InputWithAddOn.css";
import uuid from "react-uuid";
import { useEffect, useState } from "react";
const InputWithAddOnMultiple = ({
  hasAddOn = null,
  value = "",
  setValue,
  placeholder = "",
  feedbackMessage = "",
  feedbackType = "none",
  isTouched = false,
  setIsTouched,
  label = "",
  validateHandler = null,
  reset = null,
  disabled,
  type = "text",
  className = "",
  isRequired = false,
  name = null,
  id = null,
  extraProps = {},
  onBlurAction = () => { },
  dynamicFormGroup = null,
}) => {
  const DynamicElement = dynamicFormGroup ?? FormGroup;
  const [uuidName, setUuidName] = useState(null);
  useEffect(() => {
    if (!id || !name) {
      setUuidName(uuid());
    }
  }, []);

  return (
    <DynamicElement>
      {label !== "" && (
        <label
          htmlFor={name ?? uuidName}
          className="ml-1  text-truncate w-100 "
          aria-labelledby={id ?? uuidName}
          style={{
            userSelect: "none",
            fontSize: "12px",
            fontWeight: "500",
            color: "#0F0F0F",
          }}
        >
          {label}
          {isRequired && <span className="text-danger"> *</span>}
        </label>
      )}
      <div style={{ position: "relative" }}>
        <Input
          autoComplete="off"
          id={id ?? uuidName}
          name={name ?? uuidName}
          className={`InputWithAddOnMultiple_input p-3 ${hasAddOn?.left && "has_left_add_on"
            } ${hasAddOn?.right && "has_right_add_on"
            } ${className} input-background-color-default input-with-add-on-default `}
          type={type === "integer" ? "number" : type}
          disabled={disabled}
          value={value}
          aria-required="true"
          aria-label={label}
          title={value}
          tabIndex={0}
          {...extraProps}
          onChange={(e) => {
            let newValue = e.target.value;
            if (type === "integer") {
              newValue = newValue?.replace(/[^0-9]/g, '')
            }
            setValue(newValue);

            if (isTouched && validateHandler !== null) {
              validateHandler(newValue);
            }
          }}
          placeholder={placeholder}
          onBlur={(e) => {

            let newValue = value;
            if (type === "integer") {
              newValue = newValue?.replace(/[^0-9]/g, '')
            }


            if (type === "text") {
              setValue((newValue ?? "").trim());
            } else {
              setValue(newValue ?? "");
            }




            validateHandler && validateHandler(newValue);
            setIsTouched(true);
            onBlurAction(newValue);
          }}
          valid={feedbackType === "success"}
          invalid={feedbackType === "error"}
        />
        {hasAddOn?.left}
        {hasAddOn?.right}
      </div>
      {feedbackType !== "none" && (
        <div
          className={feedbackType + "-feedback-class  m-0 p-0 ml-1 w-100 text-start"}
          style={{ userSelect: "none" }}
        >
          {feedbackMessage}
        </div>
      )}
    </DynamicElement>
  );
};

InputWithAddOnMultiple.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.any,
  dynamicFormGroup: PropTypes.any,
  extraProps: PropTypes.object,
  feedbackMessage: PropTypes.any,
  feedbackType: PropTypes.any,
  hasAddOn: PropTypes.shape({
    left: PropTypes.string,
    right: PropTypes.string,
  }),
  id: PropTypes.any,
  isRequired: PropTypes.bool,
  isTouched: PropTypes.any,
  label: PropTypes.any,
  name: PropTypes.any,
  onBlurAction: PropTypes.func,
  placeholder: PropTypes.string,
  reset: PropTypes.any,
  setIsTouched: PropTypes.func,
  setValue: PropTypes.func,
  type: PropTypes.string,
  validateHandler: PropTypes.func,
  value: PropTypes.any,
};
export default InputWithAddOnMultiple;
