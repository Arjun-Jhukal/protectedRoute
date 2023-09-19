export const PATH = {
  LOGIN: {
    ROOT: "/login",
  },
  SIGNUP: {
    ROOT: "/signup",
  },
  DASHBOARD: {
    ROOT: "/",
  },
  RESULT: {
    ROOT: "/result",
    ADD_RESULT: {
      ROOT: "/result/addResult",
    },
    EDIT_RESULT: {
      ROOT: (id: number) => `/result/${id}/editResult`,
    },
    VIEW_RESULT: {
      ROOT: (id: number) => `result/${id}/viewResult`,
    },
  },
};
