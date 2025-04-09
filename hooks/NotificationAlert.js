"use client"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastsetting = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};
export default function NotificationAlert(status, message) {
  if (status === "error") {
    return toast.error(message, toastsetting);
  } else if (status === "success") {
    return toast.success(message, toastsetting);
  } else if (status === "warning") {
    return toast.warning(message, toastsetting);
  } else if (status === "info") {
    return toast.info(message, toastsetting);
  } else {
    return toast(message, toastsetting);
  }
}
