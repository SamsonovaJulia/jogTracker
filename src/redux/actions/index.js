export const addNewJog = (jog) => ({
  type: "ADD_NEW_JOG",
  payload: jog,
});

export const applyJogs = (jogs) => ({
  type: "APPLY_JOGS",
  payload: jogs,
});

export const activateFilter = (value) => ({
  type: "ACTIVATE_FILTER",
  payload: value
});
