import InputTextAreaMultiple from '@/components/forminputs/InputTextAreaMultiple';
import InputWithAddOnMultiple from '@/components/forminputs/InputWithAddOnMultiple';
import useInputComponent from '@/hooks/useInputComponent';
import React from 'react'

const D = () => {
    const PropertyDescription = useInputComponent();
    const PropertyDescriptionValidater = (value) => {
        if (value === "" || !value) {
            PropertyDescription.setFeedbackMessage("Field required!");
            PropertyDescription.setMessageType("error");
            return false;
        }
        PropertyDescription.setFeedbackMessage("");
        PropertyDescription.setMessageType("none");
        return true;
    };
    return (
        <div>
            <InputWithAddOnMultiple
                label="Owner Contact"
                placeholder=""
                className="loginInputs"
                value={PropertyDescription.enteredValue}
                setValue={PropertyDescription.setEnteredValue}
                setIsTouched={PropertyDescription.setIsTouched}
                feedbackMessage={PropertyDescription.feedbackMessage}
                feedbackType={PropertyDescription.messageType}
                isTouched={PropertyDescription.isTouched}
                validateHandler={PropertyDescriptionValidater}
                reset={PropertyDescription.reset}
                isRequired={true}
                disabled={false}
                onBlurAction={(e) => {
                    // blurInputAction(e, "Transport_Equipment_ID");
                }}
                extraProps={{ style: { height: "32px", width: '100%' } }}
            />
        </div>

<div>
<InputTextAreaMultiple
    label="Property Description"
    placeholder=""
    className="loginInputs"
    value={PropertyDescription.enteredValue}
    setValue={PropertyDescription.setEnteredValue}
    setIsTouched={PropertyDescription.setIsTouched}
    feedbackMessage={PropertyDescription.feedbackMessage}
    feedbackType={PropertyDescription.messageType}
    isTouched={PropertyDescription.isTouched}
    validateHandler={PropertyDescriptionValidater}
    reset={PropertyDescription.reset}
    isRequired={true}
    disabled={false}
    minLength={3}
    onBlurAction={(e) => {
        // blurInputAction(e, "Transport_Equipment_ID");
    }}
    extraProps={{ style: { height: "32px", width: '100%' } }}
/>
</div>

InputSelect2
    )
}

export default D