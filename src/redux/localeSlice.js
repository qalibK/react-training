export const changeLang = (newLang) => {
  return {
    type: "local/changeLang",
    payload: newLang,
  };
};

export const localeReducer = (state = { lang: "en" }, action) => {
  switch (action.type) {
    case "local/changeLang":
      return {
        ...state,
        lang: action.payload,
      };

    default:
      return state;
  }
};
