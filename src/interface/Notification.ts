export interface NotificationToastInterface {
  open?: boolean;
  variant: "success" | "warning" | "error" | "info";
  message: string | React.ReactElement;
  autoTimeout?: boolean;
  timeout?: number | null;
  size?: "large" | "medium" | "small";
}
export const notificationInitialState: NotificationToastInterface = {
  open: false,
  variant: "info",
  message: "",
  autoTimeout: false,
  timeout: 5000,
  size: "small",
};
