import { atom, selector } from 'recoil';

  export const recoilUser = atom({
    key: 'recoilUser', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });

  export const displayAlertBoxState = atom({
    key: 'displayAlertBoxState', // unique ID (with respect to other atoms/selectors)
    default: 'none', // default value (aka initial value)
  });

  export const displayLoginBoxState = atom({
    key: 'displayLoginBoxState', // unique ID (with respect to other atoms/selectors)
    default: 'flex', // default value (aka initial value)
  });

  export const displaySignupBoxState = atom({
    key: 'displaySignupBoxState', // unique ID (with respect to other atoms/selectors)
    default: 'none', // default value (aka initial value)
  });

  export const loggedUser = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const text = get(recoilUser);
  
      return text;
    },
  });

  export const displayAlertBoxValue = selector({
    key: 'displayAlertBoxValue', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const displayed = get(displayAlertBoxState);
  
      return displayed;
    },
  });

  export const displayLoginBoxValue = selector({
    key: 'displayLoginBoxValue', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const displayed = get(displayAlertBoxState);
  
      return displayed;
    },
  });

  export const displaySignupBoxValue = selector({
    key: 'displaySignupBoxValue', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const displayed = get(displayAlertBoxState);
  
      return displayed;
    },
  });