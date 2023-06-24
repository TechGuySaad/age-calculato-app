import { atom } from "recoil";

const dayState = atom({
    key: 'dayState', // unique ID (with respect to other atoms/selectors)
    default: 1, // default value (aka initial value)
  });

  const monthState = atom({
    key: 'monthState', // unique ID (with respect to other atoms/selectors)
    default: 1, // default value (aka initial value)
  });

  const yearState = atom({
    key: 'yearState', // unique ID (with respect to other atoms/selectors)
    default: 1, // default value (aka initial value)
  });

  export {dayState,monthState,yearState}