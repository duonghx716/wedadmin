import { toast } from "react-toastify";
const config = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};
export const ToastSuccess = (messenger) => toast.success(messenger, config);
export const ToastError = (messenger) => toast.error(messenger, config);
