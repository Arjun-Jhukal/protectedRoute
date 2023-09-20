export const getLocalToken = () => {
  const t = localStorage.getItem("accessToken");

  return t === "undefined" ? null : JSON.parse(t);
};
