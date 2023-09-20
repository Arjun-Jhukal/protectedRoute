import React from "react";
import { Snackbar, Alert } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/Hooks";
import { clearNotification } from "../../../slices/notifications";
import { NotificationToastInterface } from "../../../interface/Notification";

export default function ToastNotification() {
  const notification = useAppSelector((state) => state.notification);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(clearNotification());
  };

  return (
    <Snackbar
      open={notification.open}
      autoHideDuration={notification.timeout}
      onClose={handleClose}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
    >
      <Alert variant="filled" onClose={handleClose} severity={notification.variant}>
        {notification.message}
      </Alert>
    </Snackbar>
  );
}
