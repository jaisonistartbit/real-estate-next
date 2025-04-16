"use client";

import InputWithAddOnMultiple from "@/components/forminputs/InputWithAddOnMultiple";
import NotificationAlert from "@/hooks/NotificationAlert";
import useInputComponent from "@/hooks/useInputComponent";
import { useMutation, gql } from '@apollo/client';
import client from '@/lib/apolloClient';
import { uploadToStorage } from "@/app/functions/UploadToStorage";
import { useState } from "react";
import InputTextAreaMultiple from "@/components/forminputs/InputTextAreaMultiple";
import { InputSelect2 } from "@/components/forminputs/Select/InputSelect";

const ADD_PROPERTY = gql`
  mutation AddProperty(
    $name: String!
    $total_rooms: Int
    $total_bathroom: Int
    $dimension: String
    $price: Float
    $property_type: String
    $location: String
    $property_banner_image: String
    $images: [String]
    $owner_name: String
    $owner_contact: String
    $property_video: String
    $property_description: String
    $location_latitude: Float
    $location_longitude: Float
    $isBooked: Boolean
  ) {
    addProperty(
      name: $name
      total_rooms: $total_rooms
      total_bathroom: $total_bathroom
      dimension: $dimension
      price: $price
      property_type: $property_type
      location: $location
      property_banner_image: $property_banner_image
      images: $images
      owner_name: $owner_name
      owner_contact: $owner_contact
      property_video: $property_video
      property_description: $property_description
      location_latitude: $location_latitude
      location_longitude: $location_longitude
      isBooked: $isBooked
    ) {
      id
      name
      price
      location
      isBooked
    }
  }
`;


const AddProperty = ({ isOpen = true, toggle }) => {
  if (!isOpen) return null;


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

  const OwnerContact = useInputComponent();
  const OwnerContactValidater = (value) => {
    if (value === "" || !value) {
      OwnerContact.setFeedbackMessage("Field required!");
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


  const PropertyType = useInputComponent();
  const PropertyTypeValidater = (value) => {
    if (value === "" || !value) {
      PropertyType.setFeedbackMessage("Field required!");
      PropertyType.setMessageType("error");
      return false;
    }
    PropertyType.setFeedbackMessage("");
    PropertyType.setMessageType("none");
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
    let PropertyTypeValidator = PropertyTypeValidater(PropertyType.enteredValue)


    const imageUrls = null, videoUrl = null, bannerImageUrl = null

    // } = await uploadAllMedia(PropertyImages, PropertyVideo, BannerImage);


    if (!PropertyNameValidator || !TotalRoomsValidator || !TotalBathroomsValidator || !DimensionsValidator || !PriceValidator || !LocationValidator || !LocationLattitudeValidator || !LocationLongitudeValidator || !OwnerContactValidator || !OwnerNameValidator || !PropertyDescriptionValidator || !PropertyTypeValidator) {

      NotificationAlert('error', 'Fill all the required fields.')
    }
    // else if (!imageUrls) {
    //   NotificationAlert('error', 'Add images of your property.')

    // }
    // else if (!videoUrl) {
    //   NotificationAlert('error', 'Add video of your property.')

    // }
    // else if (!bannerImageUrl) {
    //   NotificationAlert('error', 'Add banner image of your property.')

    // }
    else {
      await AddProperty({
        variables: {
          name: PropertyName.enteredValue,
          total_rooms: Number(TotalRooms.enteredValue),
          total_bathroom: Number(TotalBathrooms.enteredValue),
          dimension: Dimensions.enteredValue,
          price: Number(Price.enteredValue) ,
          property_type: PropertyType.enteredValue,
          location: Location.enteredValue,
          property_banner_image: bannerImageUrl,
          images: imageUrls ?? [],
          owner_name: OwnerName.enteredValue,
          owner_contact: OwnerContact.enteredValue,
          property_video: videoUrl,
          property_description: PropertyDescription.enteredValue,
          location_latitude: Number(LocationLattitude.enteredValue) ,
          location_longitude: Number(LocationLongitude.enteredValue) ,
          isBooked: false

        }
      });
    }
  }


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl p-6">

        <h2 className="text-xl  font-[700] "><span className=" border-orange-400  border-b-3 pb-2">Add Property</span></h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-2 gap-5">

          <div  >

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
              extraProps={{ style: { height: "32px", width: '100%' } }}
            />
          </div>
          <div  >
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
              extraProps={{ style: { height: "32px", width: '100%' } }}
            />
          </div>
          <div  >
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
              extraProps={{ style: { height: "32px", width: '100%' } }}
              type="number"
            />
          </div>
          <div  >
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
              extraProps={{ style: { height: "32px", width: '100%' } }}
            />
          </div>

          <div  >
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
              extraProps={{ style: { height: "32px", width: '100%' } }}
              type="number"
            />
          </div>


          <div>
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
              extraProps={{ style: { height: "32px", width: '100%' } }}
            />
          </div>
          <div>
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
              onBlurAction={(e) => {
                // blurInputAction(e, "Transport_Equipment_ID");
              }}
              extraProps={{ style: { height: "32px", width: '100%' } }}
            />
          </div>


          <div  >
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
              extraProps={{ style: { height: "32px", width: '100%' } }}
            />
          </div>

          <div  >
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
              extraProps={{ style: { height: "32px", width: '100%' } }}
              type="number"
            />
          </div>



          <div>

            <InputWithAddOnMultiple
              label="Property Type"
              placeholder=""
              className="loginInputs"
              value={PropertyType.enteredValue}
              setValue={PropertyType.setEnteredValue}
              setIsTouched={PropertyType.setIsTouched}
              feedbackMessage={PropertyType.feedbackMessage}
              feedbackType={PropertyType.messageType}
              isTouched={PropertyType.isTouched}
              validateHandler={PropertyTypeValidater}
              reset={PropertyType.reset}
              isRequired={true}
              disabled={false}
              onBlurAction={(e) => {
                // blurInputAction(e, "Transport_Equipment_ID");
              }}
              extraProps={{ style: { height: "32px", width: '100%' } }}
            />

          </div>

          <div className="col-span-1 lg:col-span-2 md:col-span-2 sm-col-span-2 " >
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

          <div   >
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

          <div   >
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

          <div>
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
            onClick={toggle}
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
    </div>
  );
};

export default AddProperty;


const uploadAllMedia = async (images = [], videoFile = null, bannerImage = null) => {
  const imageUrls = [];

  for (const image of images) {
    const url = await uploadToStorage(image, "properties/images");
    imageUrls.push(url);
  }

  let videoUrl = null;
  if (videoFile?.[0]) {
    videoUrl = await uploadToStorage(videoFile[0], "properties/video");
  }

  let bannerImageUrl = null;
  if (bannerImage?.[0]) {
    bannerImageUrl = await uploadToStorage(bannerImage[0], "properties/bannerImage");
  }

  return { imageUrls, videoUrl, bannerImageUrl };
};
