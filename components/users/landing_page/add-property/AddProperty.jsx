"use client";

import InputWithAddOnMultiple from "@/components/forminputs/InputWithAddOnMultiple";
import useInputComponent from "@/hooks/useInputComponent";

const AddProperty = ({ isOpen = true, toggle }) => {
  if (!isOpen) return null;


  const PropertyName = useInputComponent();
  const PropertyNameValidater = (value) => {
    if (value === "" || !value) {
      PropertyName.setFeedbackMessage("Field required!");
      PropertyName.setMessageType("error");
      return false;
    }
    PropertyName.setFeedbackMessage("");
    PropertyName.setMessageType("none");
    return true;
  };
  const TotalRooms = useInputComponent();
  const TotalRoomsValidater = (value) => {
    if (value === "" || !value) {
      TotalRooms.setFeedbackMessage("Field required!");
      TotalRooms.setMessageType("error");
      return false;
    }
    TotalRooms.setFeedbackMessage("");
    TotalRooms.setMessageType("none");
    return true;
  };

  const TotalBathrooms = useInputComponent();
  const TotalBathroomsValidater = (value) => {
    if (value === "" || !value) {
      TotalBathrooms.setFeedbackMessage("Field required!");
      TotalBathrooms.setMessageType("error");
      return false;
    }
    TotalBathrooms.setFeedbackMessage("");
    TotalBathrooms.setMessageType("none");
    return true;
  };

  const Dimensions = useInputComponent();
  const DimensionsValidater = (value) => {
    if (value === "" || !value) {
      Dimensions.setFeedbackMessage("Field required!");
      Dimensions.setMessageType("error");
      return false;
    }
    Dimensions.setFeedbackMessage("");
    Dimensions.setMessageType("none");
    return true;
  };

  const Price = useInputComponent();
  const PriceValidater = (value) => {
    if (value === "" || !value) {
      Price.setFeedbackMessage("Field required!");
      Price.setMessageType("error");
      return false;
    }
    Price.setFeedbackMessage("");
    Price.setMessageType("none");
    return true;
  };

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl p-6">
        <h2 className="text-xl  font-[700] ">Add Property</h2>
        <div className="mt-2 h-1 w-20 bg-orange-400 rounded"></div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">

          <div>

            <InputWithAddOnMultiple
              label="Property Name"
              placeholder=""
              className="loginInputs"
              value={PropertyName.enteredValue}
              setValue={PropertyName.setEnteredValue}
              setIsTouched={PropertyName.setIsTouched}
              feedbackMessage={PropertyName.feedbackMessage}
              feedbackType={PropertyName.messageType}
              isTouched={PropertyName.isTouched}
              validateHandler={PropertyNameValidater}
              reset={PropertyName.reset}
              isRequired={true}
              disabled={false}
              onBlurAction={(e) => {
                // blurInputAction(e, "Transport_Equipment_ID");
              }}
              extraProps={{ style: { height: "32px", width: '90%' } }}
            />
          </div>
          <div>
            <InputWithAddOnMultiple
              label="Total Rooms"
              placeholder=""
              className="loginInputs"
              value={TotalRooms.enteredValue}
              setValue={TotalRooms.setEnteredValue}
              setIsTouched={TotalRooms.setIsTouched}
              feedbackMessage={TotalRooms.feedbackMessage}
              feedbackType={TotalRooms.messageType}
              isTouched={TotalRooms.isTouched}
              validateHandler={TotalRoomsValidater}
              reset={TotalRooms.reset}
              isRequired={true}
              disabled={false}
              onBlurAction={(e) => {
                // blurInputAction(e, "Transport_Equipment_ID");
              }}
              extraProps={{ style: { height: "32px", width: '90%' } }}
            />
          </div>
          <div>
            <InputWithAddOnMultiple
              label="Total Bathrooms"
              placeholder=""
              className="loginInputs"
              value={TotalBathrooms.enteredValue}
              setValue={TotalBathrooms.setEnteredValue}
              setIsTouched={TotalBathrooms.setIsTouched}
              feedbackMessage={TotalBathrooms.feedbackMessage}
              feedbackType={TotalBathrooms.messageType}
              isTouched={TotalBathrooms.isTouched}
              validateHandler={TotalBathroomsValidater}
              reset={TotalBathrooms.reset}
              isRequired={true}
              disabled={false}
              onBlurAction={(e) => {
                // blurInputAction(e, "Transport_Equipment_ID");
              }}
              extraProps={{ style: { height: "32px", width: '90%' } }}
            />
          </div>
          <div>
            <InputWithAddOnMultiple
              label="Dimensions"
              placeholder=""
              className="loginInputs"
              value={Dimensions.enteredValue}
              setValue={Dimensions.setEnteredValue}
              setIsTouched={Dimensions.setIsTouched}
              feedbackMessage={Dimensions.feedbackMessage}
              feedbackType={Dimensions.messageType}
              isTouched={Dimensions.isTouched}
              validateHandler={DimensionsValidater}
              reset={Dimensions.reset}
              isRequired={true}
              disabled={false}
              onBlurAction={(e) => {
                // blurInputAction(e, "Transport_Equipment_ID");
              }}
              extraProps={{ style: { height: "32px", width: '90%' } }}
            />
          </div>

          <div>
            <InputWithAddOnMultiple
              label="Price"
              placeholder=""
              className="loginInputs"
              value={Price.enteredValue}
              setValue={Price.setEnteredValue}
              setIsTouched={Price.setIsTouched}
              feedbackMessage={Price.feedbackMessage}
              feedbackType={Price.messageType}
              isTouched={Price.isTouched}
              validateHandler={PriceValidater}
              reset={Price.reset}
              isRequired={true}
              disabled={false}
              onBlurAction={(e) => {
                // blurInputAction(e, "Transport_Equipment_ID");
              }}
              extraProps={{ style: { height: "32px", width: '90%' } }}
            />
          </div>
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
              extraProps={{ style: { height: "32px", width: '90%' } }}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Property Banner Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={() => { }}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full 
             file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 
             hover:file:bg-blue-100"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Property Video
            </label>
            <input
              type="file"
              accept="video/*"
              onChange={() => { }}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full 
             file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 
             hover:file:bg-green-100"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={toggle}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
