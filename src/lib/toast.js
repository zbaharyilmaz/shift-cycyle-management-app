import { toast } from "react-toastify";

export const toastSuccess = (message) => {
  toast.success(message, {
    position: "bottom-right",
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const toastError = (message) => {
  toast.error(message, {
    position: "bottom-right",
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
