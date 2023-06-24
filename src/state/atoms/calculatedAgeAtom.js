import { atom } from "recoil";

const calculatedDayState = atom({
    key: 'calculatedDayState', // unique ID (with respect to other atoms/selectors)
    default: 1, // default value (aka initial value)
  });

  const calculatedMonthState = atom({
    key: 'calculatedMonthState', // unique ID (with respect to other atoms/selectors)
    default: 1, // default value (aka initial value)
  });

  const calculatedYearState = atom({
    key: 'calculatedYearState', // unique ID (with respect to other atoms/selectors)
    default: 1, // default value (aka initial value)
  });

  export {calculatedDayState,calculatedMonthState,calculatedYearState}