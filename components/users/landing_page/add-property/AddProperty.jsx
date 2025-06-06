"use client";

import InputWithAddOnMultiple from "@/components/forminputs/InputWithAddOnMultiple";
import NotificationAlert from "@/hooks/NotificationAlert";
import useInputComponent from "@/hooks/useInputComponent";
import { useMutation, gql } from '@apollo/client';
import client from '@/lib/apolloClient';
import { uploadToStorage } from "@/app/functions/UploadToStorage";
import { useState } from "react";
import InputTextAreaMultiple from "@/components/forminputs/InputTextAreaMultiple";
import { Modal } from "@/components/modal";
import { useToast } from '@/components/alerts/ToastContext';
import InputSelect from "@/components/forminputs/Select/InputSelect";
import { AmenitiesSelect, AvailableForSelect, AvailableFromSelect, FurnishingStatusSelect, PostedBySelect, PropertyTypeSelect } from "@/staticData/OptionMenus";
import InputMultipleSelect from "@/components/forminputs/Select/InputMultipleSelect";
const ADD_PROPERTY = gql`
  mutation AddProperty(
    $name: String!
    $total_rooms: Int
    $total_bathroom: Int
    $dimension: String
    $price: Float
    $property_type: String
    $location: String
    $city: String
    $state: String
    $property_banner_image: String
    $banner_image_name: String
    $images: [ImageObjectInput!]!
    $owner_name: String
    $owner_contact: String
    $property_video: String
    $property_video_name: String
    $property_description: String
    $location_latitude: Float
    $location_longitude: Float
    $isbooked: Boolean
    $furnishing_status: String
    $available_for: String
    $available_from: String
    $posted_by: String
    $amenities: [String]
    $property_age: Int
    $user_id: ID!
  ) {
    addProperty(
      name: $name
      total_rooms: $total_rooms
      total_bathroom: $total_bathroom
      dimension: $dimension
      price: $price
      property_type: $property_type
      location: $location
      city: $city
      state: $state
      property_banner_image: $property_banner_image
      banner_image_name: $banner_image_name
      images: $images
      owner_name: $owner_name
      owner_contact: $owner_contact
      property_video: $property_video
      property_video_name: $property_video_name
      property_description: $property_description
      location_latitude: $location_latitude
      location_longitude: $location_longitude
      isbooked: $isbooked
      furnishing_status: $furnishing_status
      available_for: $available_for
      available_from: $available_from
      posted_by: $posted_by
      amenities: $amenities
      property_age: $property_age
      user_id: $user_id
    ) {
      id
      name
      
    }
  }
`;



const AddProperty = ({ isOpen, toggle, closeModal }) => {
  if (!isOpen) return null;
  const { showToast } = useToast();
  const [BannerImage, setbannerImage] = useState(null)
  const [PropertyVideo, setPropertyVideo] = useState(null)
  const [PropertyImages, setPropertyImages] = useState([])
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
  const OwnerName = useInputComponent();
  const OwnerNameValidater = (value) => {
    if (value === "" || !value) {
      OwnerName.setFeedbackMessage("Field required!");
      OwnerName.setMessageType("error");
      return false;
    }
    OwnerName.setFeedbackMessage("");
    OwnerName.setMessageType("none");
    return true;
  };

  const State = useInputComponent();
  const StateValidater = (value) => {
    if (value === "" || !value) {
      State.setFeedbackMessage("Field required!");
      State.setMessageType("error");
      return false;
    }
    State.setFeedbackMessage("");
    State.setMessageType("none");
    return true;
  };



  const City = useInputComponent();
  const CityValidater = (value) => {
    if (value === "" || !value) {
      City.setFeedbackMessage("Field required!");
      City.setMessageType("error");
      return false;
    }
    City.setFeedbackMessage("");
    City.setMessageType("none");
    return true;
  };

  const OwnerContact = useInputComponent();
  const OwnerContactValidater = (value) => {
    if (value === "" || !value) {
      OwnerContact.setFeedbackMessage("Field required!");
      OwnerContact.setMessageType("error");
      return false;
    }
    const phoneRegex =
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    if (!phoneRegex.test(value)) {
      OwnerContact.setFeedbackMessage("Enter valid Phone Number!");
      OwnerContact.setMessageType("error");
      return false;
    }

    OwnerContact.setFeedbackMessage("");
    OwnerContact.setMessageType("none");

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




  const [PropertyType, setPropertyType] = useState([])
  const [PropertyTypeFeedbackMessage, setPropertyTypeFeedBackMessage] = useState({
    type: "info",
    message: "",
  });
  const [PropertyTypeIsTouch, setPropertyTypeIsTouch] =
    useState(false);
  const PropertyTypeValidater = (value) => {
    if (value === "" || !value) {
      setPropertyTypeFeedBackMessage({
        type: "error",
        message: "Select Property Type!",
      });
      return false;
    }
    setPropertyTypeFeedBackMessage({ type: "info", message: "" });

    return true;
  };

  const [Amenities, setAmenities] = useState([])
  const [AmenitiesIsTouch, setAmenitiesIsTouch] =
    useState(false);
  const [AmenitiesFeedbackMessage, setAmenitiesFeedBackMessage] = useState({
    type: "info",
    message: "",
  });
  const AmenitiesValidater = (value) => {
    if (value === "" || !value) {
      setAmenitiesFeedBackMessage({
        type: "error",
        message: "Select Amenities!",
      });
      return false;
    }
    setAmenitiesFeedBackMessage({ type: "info", message: "" });

    return true;
  };



  const [FurnishingStatus, setFurnishingStatus] = useState([])
  const [FurnishingStatusIsTouch, setFurnishingStatusIsTouch] =
    useState(false);
  const [FurnishingStatusFeedbackMessage, setFurnishingStatusFeedBackMessage] = useState({
    type: "info",
    message: "",
  });
  const FurnishingStatusValidater = (value) => {
    if (value === "" || !value) {
      setFurnishingStatusFeedBackMessage({
        type: "error",
        message: "Select Furnishing Status!",
      });
      return false;
    }
    setFurnishingStatusFeedBackMessage({ type: "info", message: "" });

    return true;
  };


  const [AvailableFor, setAvailableFor] = useState([])
  const [AvailableForIsTouch, setAvailableForIsTouch] =
    useState(false);
  const [AvailableForFeedbackMessage, setAvailableForFeedBackMessage] = useState({
    type: "info",
    message: "",
  });
  const AvailableForValidater = (value) => {
    if (value === "" || !value) {
      setAvailableForFeedBackMessage({
        type: "error",
        message: "Field Required!",
      });
      return false;
    }
    setAvailableForFeedBackMessage({ type: "info", message: "" });

    return true;
  };


  const [AvailableForm, setAvailableForm] = useState([])
  const [AvailableFormIsTouch, setAvailableFormIsTouch] =
    useState(false);
  const [AvailableFormFeedbackMessage, setAvailableFormFeedBackMessage] = useState({
    type: "info",
    message: "",
  });
  const AvailableFormValidater = (value) => {
    if (value === "" || !value) {
      setAvailableFormFeedBackMessage({
        type: "error",
        message: "Field Required!",
      });
      return false;
    }
    setAvailableFormFeedBackMessage({ type: "info", message: "" });

    return true;
  };

  const [PostedBy, setPostedBy] = useState([])
  const [PostedByIsTouch, setPostedByIsTouch] =
    useState(false);
  const [PostedByFeedbackMessage, setPostedByFeedBackMessage] = useState({
    type: "info",
    message: "",
  });
  const PostedByValidater = (value) => {
    if (value === "" || !value) {
      setPostedByFeedBackMessage({
        type: "error",
        message: "Field Required!",
      });
      return false;
    }
    setPostedByFeedBackMessage({ type: "info", message: "" });

    return true;
  };

  const PropertyAge = useInputComponent();
  const PropertyAgeValidater = (value) => {
    if (value === "" || !value) {
      PropertyAge.setFeedbackMessage("Field required!");
      PropertyAge.setMessageType("error");
      return false;
    }
    PropertyAge.setFeedbackMessage("");
    PropertyAge.setMessageType("none");
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
  const LocationLattitude = useInputComponent();
  const LocationLattitudeValidater = (value) => {
    if (value === "" || !value) {
      LocationLattitude.setFeedbackMessage("Field required!");
      LocationLattitude.setMessageType("error");
      return false;
    }
    LocationLattitude.setFeedbackMessage("");
    LocationLattitude.setMessageType("none");
    return true;
  };
  const LocationLongitude = useInputComponent();
  const LocationLongitudeValidater = (value) => {
    if (value === "" || !value) {
      LocationLongitude.setFeedbackMessage("Field required!");
      LocationLongitude.setMessageType("error");
      return false;
    }
    LocationLongitude.setFeedbackMessage("");
    LocationLongitude.setMessageType("none");
    return true;
  };
  const IsBooked = useInputComponent();
  const IsBookedValidater = (value) => {
    if (value === "" || !value) {
      IsBooked.setFeedbackMessage("Field required!");
      IsBooked.setMessageType("error");
      return false;
    }
    IsBooked.setFeedbackMessage("");
    IsBooked.setMessageType("none");
    return true;
  };

  const [AddProperty] = useMutation(ADD_PROPERTY, { client });
  const [uploadingFileFetch, setUploadingFileFetch] = useState(null)


  const addProperty = async () => {
    let PropertyNameValidator = PropertyNameValidater(PropertyName.enteredValue)
    let TotalRoomsValidator = TotalRoomsValidater(TotalRooms.enteredValue)
    let TotalBathroomsValidator = TotalBathroomsValidater(TotalBathrooms.enteredValue)
    let DimensionsValidator = DimensionsValidater(Dimensions.enteredValue)
    let PriceValidator = PriceValidater(Price.enteredValue)
    let LocationValidator = LocationValidater(Location.enteredValue)
    let LocationLattitudeValidator = LocationLattitudeValidater(LocationLattitude.enteredValue)
    let LocationLongitudeValidator = LocationLongitudeValidater(LocationLongitude.enteredValue)
    let OwnerContactValidator = OwnerContactValidater(OwnerContact.enteredValue)
    let OwnerNameValidator = OwnerNameValidater(OwnerName.enteredValue)
    let PropertyDescriptionValidator = PropertyDescriptionValidater(PropertyDescription.enteredValue)
    let PropertyTypeValidator = PropertyTypeValidater(PropertyType)
    let CityValidator = CityValidater(City.enteredValue)
    let StateValidator = StateValidater(State.enteredValue)
    let PropertyAgeValidator = PropertyAgeValidater(PropertyAge.enteredValue);
    let FurnishingStatusValidator = FurnishingStatusValidater(FurnishingStatus);
    let AvailableForValidator = AvailableForValidater(AvailableFor);
    let AvailableFormValidator = AvailableFormValidater(AvailableForm);
    let PostedByValidator = PostedByValidater(PostedBy);
    let AmenitiesValidator = AmenitiesValidater(Amenities);




    if (!PropertyNameValidator || !TotalRoomsValidator || !TotalBathroomsValidator || !DimensionsValidator || !PriceValidator || !LocationValidator || !LocationLattitudeValidator || !LocationLongitudeValidator || !OwnerContactValidator || !OwnerNameValidator || !PropertyDescriptionValidator || !PropertyTypeValidator || !CityValidator || !StateValidator || !PropertyAgeValidator || !FurnishingStatusValidator || !AvailableForValidator || !AvailableFormValidator || !PostedByValidator || !AmenitiesValidator) {

      NotificationAlert('error', 'Fill all the required fields.')
      return false
    }
    else if ((PropertyImages ?? [])?.length == 0) {
      NotificationAlert('error', 'Add images of your property.')
      return false

    }
    else if (!PropertyVideo) {
      NotificationAlert('error', 'Add video of your property.')
      return false

    }
    else if (!BannerImage) {
      NotificationAlert('error', 'Add banner image of your property.')
      return false

    }

    setUploadingFileFetch('Uploading attatchments...')
    let { imageUrls = null, videoUrl = null, bannerImageUrl = null } = await uploadAllMedia(PropertyImages, PropertyVideo, BannerImage, setUploadingFileFetch);
    setUploadingFileFetch('Adding Property')

    try {
      const { data } = await AddProperty({
        variables: {
          name: PropertyName.enteredValue,
          total_rooms: Number(TotalRooms.enteredValue),
          total_bathroom: Number(TotalBathrooms.enteredValue),
          dimension: Dimensions.enteredValue,
          price: Number(Price.enteredValue),
          property_type: PropertyType,
          location: Location.enteredValue,
          property_banner_image: bannerImageUrl,
          images: imageUrls ?? [],
          owner_name: OwnerName.enteredValue,
          owner_contact: OwnerContact.enteredValue,
          property_video: videoUrl,
          property_description: PropertyDescription.enteredValue,
          location_latitude: Number(LocationLattitude.enteredValue),
          location_longitude: Number(LocationLongitude.enteredValue),
          city: City.enteredValue,
          state: State.enteredValue,
          isbooked: false,
          banner_image_name: BannerImage?.[0]?.name,
          property_video_name: PropertyVideo?.[0]?.name,
          furnishing_status: FurnishingStatus,
          available_for: AvailableFor,
          available_from: AvailableForm,
          posted_by: PostedBy,
          amenities: (Amenities ?? []).map(a => a.value),
          property_age: Number(PropertyAge.enteredValue),
          user_id: "cf728789-92d2-4d26-82e0-6c2018fb9c86"
        }
      });
      showToast({
        message: 'Property added successfully.',
        type: 'success',
        duration: 3000
      })
      setUploadingFileFetch(null)


      closeModal()

    } catch (error) {
      setUploadingFileFetch(null)

      // ❌ Error log or toast
      showToast({ message: 'Error occured while adding property', type: 'error', duration: 3000 })
    }


  }


  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        closeModal();
      }}
      className="max-w-[1000px] m-4  "
    >

      <div className="w-full p-4 lg:p-11   overflow-y-auto no-scrollbar">

        <h2 className="text-xl text-center  font-[700] "><span className=" border-orange-400  border-b-3 pb-2">Add Property</span></h2>

        {
          (uploadingFileFetch) ?
            <div className="flex  justify-center items-center  mt-12   bg-white dark:bg-gray-900">
              <div className="text-center">
                <svg className="animate-spin h-10 w-10 text-brand-500 mx-auto" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="orange" strokeWidth="4" fill="none" />
                  <path
                    className="opacity-75"
                    fill="orange"
                    d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 000 16v4l3.5-3.5L12 20v-4a8 8 0 01-8-8z"
                  />
                </svg>
                <p className="mt-4 text-gray-700 dark:text-white">{uploadingFileFetch}</p>
              </div>
            </div>
            :
            <div>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-2 pe-3 w-full max-h-[60vh] overflow-y-auto custom-scrollbar">



                <div className="col-span-3 lg:col-span-1 "  >

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
                    extraProps={{ style: { height: "35px", width: '100%' } }}
                  />
                </div>
                <div className="col-span-3 lg:col-span-1 " >
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
                    type="number"
                    onBlurAction={(e) => {
                      // blurInputAction(e, "Transport_Equipment_ID");
                    }}
                    extraProps={{ style: { height: "35px", width: '100%' } }}
                  />
                </div>
                <div className="col-span-3 lg:col-span-1 " >
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
                    extraProps={{ style: { height: "35px", width: '100%' } }}
                    type="number"
                  />
                </div>
                <div className="col-span-3 lg:col-span-1 " >
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
                    extraProps={{ style: { height: "35px", width: '100%' } }}
                  />
                </div>

                <div className="col-span-3 lg:col-span-1 " >
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
                    extraProps={{ style: { height: "35px", width: '100%' } }}
                    type="number"
                  />
                </div>

                <div className="col-span-3 lg:col-span-1 " >

                  <InputSelect
                    label="Property Type"
                    options={PropertyTypeSelect ?? []}
                    placeholder=""
                    className="loginInputs"
                    value={PropertyType}
                    setValue={setPropertyType}
                    setIsTouched={setPropertyTypeIsTouch}
                    feedbackMessage={PropertyTypeFeedbackMessage.message}
                    feedbackType={PropertyTypeFeedbackMessage.type}
                    isTouched={PropertyTypeIsTouch.isTouched}
                    validateHandler={PropertyTypeValidater}
                    isRequired={true}
                    disabled={false}
                    extraProps={{ style: { height: "35px", width: '100%' } }}
                  />
                </div>

                <div>
                  <InputWithAddOnMultiple
                    label="Property Age"
                    placeholder=""
                    className="loginInputs"
                    value={PropertyAge.enteredValue}
                    setValue={PropertyAge.setEnteredValue}
                    setIsTouched={PropertyAge.setIsTouched}
                    feedbackMessage={PropertyAge.feedbackMessage}
                    feedbackType={PropertyAge.messageType}
                    isTouched={PropertyAge.isTouched}
                    validateHandler={PropertyAgeValidater}
                    reset={PropertyAge.reset}
                    isRequired={true}
                    disabled={false}
                    onBlurAction={(e) => {
                    }}
                    type="number"
                    extraProps={{ style: { height: "35px", width: '100%' } }}
                  />
                </div>



                <div className="col-span-3 lg:col-span-1 " >
                  <InputSelect
                    label="Furnishing Status"
                    options={FurnishingStatusSelect ?? []}
                    placeholder=""
                    className="loginInputs"
                    value={FurnishingStatus}
                    setValue={setFurnishingStatus}
                    setIsTouched={setFurnishingStatusIsTouch}
                    feedbackMessage={FurnishingStatusFeedbackMessage.message}
                    feedbackType={FurnishingStatusFeedbackMessage.type}
                    isTouched={FurnishingStatusIsTouch}
                    validateHandler={FurnishingStatusValidater}
                    isRequired={true}
                    disabled={false}
                    extraProps={{ style: { height: "35px", width: '100%' } }}
                  />
                </div>
                <div className="col-span-3 lg:col-span-1 " >
                  <InputSelect
                    label="Available For"
                    options={AvailableForSelect ?? []}
                    placeholder=""
                    className="loginInputs"
                    value={AvailableFor}
                    setValue={setAvailableFor}
                    setIsTouched={setAvailableForIsTouch}
                    feedbackMessage={AvailableForFeedbackMessage.message}
                    feedbackType={AvailableForFeedbackMessage.type}
                    isTouched={AvailableForIsTouch}
                    validateHandler={AvailableForValidater}
                    isRequired={true}
                    disabled={false}
                    extraProps={{ style: { height: "35px", width: '100%' } }}
                  />
                </div>
                <div className="col-span-3 lg:col-span-1 " >
                  <InputSelect
                    label="Available Form"
                    options={AvailableFromSelect ?? []}
                    placeholder=""
                    className="loginInputs"
                    value={AvailableForm}
                    setValue={setAvailableForm}
                    setIsTouched={setAvailableFormIsTouch}
                    feedbackMessage={AvailableFormFeedbackMessage.message}
                    feedbackType={AvailableFormFeedbackMessage.type}
                    isTouched={AvailableFormIsTouch}
                    validateHandler={AvailableFormValidater}
                    isRequired={true}
                    disabled={false}
                    extraProps={{ style: { height: "35px", width: '100%' } }}
                  />
                </div>
                <div className="col-span-3 lg:col-span-1 " >
                  <InputMultipleSelect
                    label="Amenities"
                    options={AmenitiesSelect ?? []}
                    placeholder=""
                    className="loginInputs"
                    value={Amenities}
                    setValue={setAmenities}
                    setIsTouched={setAmenitiesIsTouch}
                    feedbackMessage={AmenitiesFeedbackMessage.message}
                    feedbackType={AmenitiesFeedbackMessage.type}
                    isTouched={AmenitiesIsTouch}
                    validateHandler={AmenitiesValidater}
                    isRequired={true}
                    disabled={false}
                    extraProps={{ style: { height: "35px", width: '100%' } }}
                  />
                </div>

                <div className="col-span-3 lg:col-span-1 " >
                  <InputSelect
                    label="Posted By"
                    options={PostedBySelect ?? []}
                    placeholder=""
                    className="loginInputs"
                    value={PostedBy}
                    setValue={setPostedBy}
                    setIsTouched={setPostedByIsTouch}
                    feedbackMessage={PostedByFeedbackMessage.message}
                    feedbackType={PostedByFeedbackMessage.type}
                    isTouched={PostedByIsTouch}
                    validateHandler={PostedByValidater}
                    isRequired={true}
                    disabled={false}
                    extraProps={{ style: { height: "35px", width: '100%' } }}
                  />
                </div>
                <div className="col-span-3 lg:col-span-1 " >
                  <InputWithAddOnMultiple
                    label="Owner Name"
                    placeholder=""
                    className="loginInputs"
                    value={OwnerName.enteredValue}
                    setValue={OwnerName.setEnteredValue}
                    setIsTouched={OwnerName.setIsTouched}
                    feedbackMessage={OwnerName.feedbackMessage}
                    feedbackType={OwnerName.messageType}
                    isTouched={OwnerName.isTouched}
                    validateHandler={OwnerNameValidater}
                    reset={OwnerName.reset}
                    isRequired={true}
                    disabled={false}
                    onBlurAction={(e) => {
                      // blurInputAction(e, "Transport_Equipment_ID");
                    }}
                    extraProps={{ style: { height: "35px", width: '100%' } }}
                  />
                </div>
                <div className="col-span-3 lg:col-span-1 " >
                  <InputWithAddOnMultiple
                    label="Owner Contact"
                    placeholder=""
                    className="loginInputs"
                    value={OwnerContact.enteredValue}
                    setValue={OwnerContact.setEnteredValue}
                    setIsTouched={OwnerContact.setIsTouched}
                    feedbackMessage={OwnerContact.feedbackMessage}
                    feedbackType={OwnerContact.messageType}
                    isTouched={OwnerContact.isTouched}
                    validateHandler={OwnerContactValidater}
                    reset={OwnerContact.reset}
                    isRequired={true}
                    disabled={false}
                    type="number"

                    onBlurAction={(e) => {
                    }}
                    extraProps={{ style: { height: "35px", width: '100%' } }}
                  />
                </div>
                <div className="col-span-3 lg:col-span-1 "  >
                  <InputWithAddOnMultiple
                    label="Lattitude"
                    placeholder=""
                    className="loginInputs"
                    value={LocationLattitude.enteredValue}
                    setValue={LocationLattitude.setEnteredValue}
                    setIsTouched={LocationLattitude.setIsTouched}
                    feedbackMessage={LocationLattitude.feedbackMessage}
                    feedbackType={LocationLattitude.messageType}
                    isTouched={LocationLattitude.isTouched}
                    validateHandler={LocationLattitudeValidater}
                    reset={LocationLattitude.reset}
                    isRequired={true}
                    disabled={false}
                    onBlurAction={(e) => {
                      // blurInputAction(e, "Transport_Equipment_ID");
                    }}
                    type="number"
                    extraProps={{ style: { height: "35px", width: '100%' } }}
                  />
                </div>

                <div className="col-span-3 lg:col-span-1 "  >
                  <InputWithAddOnMultiple
                    label="Longitude"
                    placeholder=""
                    className="loginInputs"
                    value={LocationLongitude.enteredValue}
                    setValue={LocationLongitude.setEnteredValue}
                    setIsTouched={LocationLongitude.setIsTouched}
                    feedbackMessage={LocationLongitude.feedbackMessage}
                    feedbackType={LocationLongitude.messageType}
                    isTouched={LocationLongitude.isTouched}
                    validateHandler={LocationLongitudeValidater}
                    reset={LocationLongitude.reset}
                    isRequired={true}
                    disabled={false}
                    onBlurAction={(e) => {
                      // blurInputAction(e, "Transport_Equipment_ID");
                    }}
                    extraProps={{ style: { height: "35px", width: '100%' } }}
                    type="number"
                  />
                </div>



                <div className="col-span-3 lg:col-span-1 " >

                  <InputWithAddOnMultiple
                    label="City"
                    placeholder=""
                    className="loginInputs"
                    value={City.enteredValue}
                    setValue={City.setEnteredValue}
                    setIsTouched={City.setIsTouched}
                    feedbackMessage={City.feedbackMessage}
                    feedbackType={City.messageType}
                    isTouched={City.isTouched}
                    validateHandler={CityValidater}
                    reset={City.reset}
                    isRequired={true}
                    disabled={false}
                    onBlurAction={(e) => {
                      // blurInputAction(e, "Transport_Equipment_ID");
                    }}
                    extraProps={{ style: { height: "35px", width: '100%' } }}
                  />

                </div>

                <div className="col-span-3 lg:col-span-1 " >

                  <InputWithAddOnMultiple
                    label="State"
                    placeholder=""
                    className="loginInputs"
                    value={State.enteredValue}
                    setValue={State.setEnteredValue}
                    setIsTouched={State.setIsTouched}
                    feedbackMessage={State.feedbackMessage}
                    feedbackType={State.messageType}
                    isTouched={State.isTouched}
                    validateHandler={StateValidater}
                    reset={State.reset}
                    isRequired={true}
                    disabled={false}
                    onBlurAction={(e) => {
                      // blurInputAction(e, "Transport_Equipment_ID");
                    }}
                    extraProps={{ style: { height: "35px", width: '100%' } }}
                  />

                </div>

                <div className=" col-span-3   " >
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
                    extraProps={{ style: { height: "35px", width: '100%' } }}
                  />
                </div>


                <div className="col-span-3  " >
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
                    extraProps={{ style: { width: '100%' } }}
                  />
                </div>

                <div className="col-span-3 lg:col-span-1 "  >
                  <label className="text-start block mb-2 text-sm font-medium text-gray-700">
                    Property Banner Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"

                    onChange={(e) => {
                      setbannerImage(e.target.files);
                    }}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full 
             file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 
             hover:file:bg-blue-100"
                  />
                </div>

                <div className="col-span-3 lg:col-span-1 "   >
                  <label className="text-start block mb-2 text-sm font-medium text-gray-700">
                    Property Other Images
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => {
                      const files = Array.from(e.target.files); // convert FileList to array
                      setPropertyImages(files);
                    }}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full 
             file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 
             hover:file:bg-blue-100"
                  />
                </div>

                <div className="col-span-3 lg:col-span-1 "  >
                  <label className="block text-start mb-2 text-sm font-medium text-gray-700">
                    Property Video
                  </label>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => {
                      setPropertyVideo(e.target.files);
                    }}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full 
             file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 
             hover:file:bg-green-100"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-2">
                <button
                  onClick={() => {
                    closeModal();
                  }}
                  className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button onClick={() => {
                  addProperty()
                }}
                  className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-600"
                >
                  Add
                </button>
              </div>
            </div>
        }

      </div>
    </Modal>
  );
};

export default AddProperty;


const uploadAllMedia = async (images = [], videoFile = null, bannerImage = null, setUploadingFileFetch) => {
  const imageUrls = [];
  setUploadingFileFetch('Uploading property images...')
  for (const image of images) {
    const url = await uploadToStorage(image, "properties/images");
    imageUrls.push({ url: url, image: image?.name });
  }
  setUploadingFileFetch('Uploading property video...')

  let videoUrl = null;
  if (videoFile?.[0]) {
    videoUrl = await uploadToStorage(videoFile[0], "properties/video");
  }
  setUploadingFileFetch('Uploading property banner image...')

  let bannerImageUrl = null;
  if (bannerImage?.[0]) {
    bannerImageUrl = await uploadToStorage(bannerImage[0], "properties/bannerImage");
  }

  return { imageUrls, videoUrl, bannerImageUrl };
};
