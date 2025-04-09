import InputWithAddOnMultiple from '@/components/forminputs/InputWithAddOnMultiple';
import useInputComponent from '@/hooks/useInputComponent';
import React from 'react'

const d = () => {
    const Location = useInputComponent();
    const LocationValidater = (value) => {
        if (value === "" || !value) {
            Location.setFeedbackMessage("Field required!");
            Location.setMessageType("error");
            return false;
        }
        Location.setFeedbackMessage("");
        Location.setMessageType("none");
        return true;
    };
    return (
        <div>
            <InputWithAddOnMultiple
                label="Location"
                placeholder=""
                className="loginInputs"
                value={Location.enteredValue}
                setValue={Location.setEnteredValue}
                setIsTouched={Location.setIsTouched}
                feedbackMessage={Location.feedbackMessage}
                feedbackType={Location.messageType}
                isTouched={Location.isTouched}
                validateHandler={LocationValidater}
                reset={Location.reset}
                isRequired={true}
                disabled={false}
                onBlurAction={(e) => {
                    // blurInputAction(e, "Transport_Equipment_ID");
                }}
                extraProps={{ style: { height: "32px", width: '100%' } }}
            />
        </div>
    )
}

export default d