"use client"
import axios from "axios";
import LocalStorageHelper from "../services/LocalStorageHelper";
import {
  progressBarStart,
  progressBarStop,
} from "../services/NavProgressHelper";

const fetchAPI = async (
  {
    fullURL = null,
    url = "",
    method = "GET",
    APIKey = null,
    params = {},
    body = null,
    headers = { "Content-Type": "application/json;  charset=utf-8" },
    data = null,
    isAsync = false,
  },
  dataTransform = null,
  errorTransform = null
) => {
  const catchErrorHandlerAsync = async (error) => {
    if (error?.response?.status !== 401 && error?.response?.status !== '401') {
      if (errorTransform) {
        let resultData = await errorTransform(error);
        return resultData;
      } else {
        return error?.message;
      }
    } else {
      LocalStorageHelper.removeItem("token");
      window.location.reload(false);
    }
  };
  const catchErrorHandler = (error) => {
    if (error?.response?.status !== 401 && error?.response?.status !== '401') {
      if (errorTransform) {
        return errorTransform(error);
      } else {
        return error?.message;
      }
    } else {
      LocalStorageHelper.removeItem("token");
      window.location.reload(false);
    }
  };
  const thenSuccessHandlerAsync = async (response) => {
    if (dataTransform) {
      let resultData = await dataTransform(response?.data);
      return {data:resultData,status:"success"};
    } else {
        return {data:response?.data,status:"success"};
    }
  };
  const thenSuccessHandler = (response) => {
    if (dataTransform) {
      let resultData = dataTransform(response?.data);
      return {data:resultData,status:"success"};
    } else {
      return {data:response?.data,status:"success"};
    }
  };
  progressBarStart();
  let fullurl = fullURL ?? process.env.REACT_APP_API_URL + url;
  let tokenHeader = { ...headers, method: method };
  if (APIKey) {
    tokenHeader.Authorization = `Bearer ${APIKey}`;
  }

  try {
    var response =null
    switch (method) {
      case "GET":
         response = await axios.get(fullurl, {
          params: { ...params },
          headers: tokenHeader,
        });
        return isAsync
          ? thenSuccessHandlerAsync(response)
          : thenSuccessHandler(response);
      case "POST":
         response = await  axios.post(fullurl, body, {
          headers: {
            ...tokenHeader,
          },
        });
        return isAsync
          ? thenSuccessHandlerAsync(response)
          : thenSuccessHandler(response);

      case "PUT":
         response = await axios.put(fullurl, body, {
          headers: {
            ...tokenHeader,
          },
        });
        return isAsync
          ? thenSuccessHandlerAsync(response)
          : thenSuccessHandler(response);

      case "DELETE":
         response = await axios
          .delete(fullurl, {
            headers: {
              ...tokenHeader,
            },
          })
          .then(isAsync ? thenSuccessHandlerAsync : thenSuccessHandler);
        return isAsync
          ? thenSuccessHandlerAsync(response)
          : thenSuccessHandler(response);
      default:
        return {
          status: "error",
          data: null,
          error: "Unknown method requested!",
        };
    }
  } catch (error) {
    const transformedError = isAsync
      ? catchErrorHandlerAsync(error)
      : catchErrorHandler(error);
    return {
      status: "error",
      data: null,
      error:
        transformedError || "Someting went wrong while processing API request!",
    };
  } finally {
    progressBarStop();
  }
};
export default fetchAPI;
