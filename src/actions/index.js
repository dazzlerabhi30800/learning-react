export const increment = (nr) => {
  return {
    type: "INCREMENT",
    payload: nr,
  };
};

export const decrement = (nr) => {
  return {
    type: "DECREMENT",
    payload: nr,
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};

export const toggleSign = () => {
  return {
    type: "SIGN_IN",
  };
};
