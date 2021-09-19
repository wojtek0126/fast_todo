import { atom, selector } from 'recoil';

  export const recoilUser = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });

  export const loggedUser = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const text = get(recoilUser);
  
      return text;
    },
  });

  export const loggedUserText = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const text = get(recoilUser);
  
      return `Currently logged user: ${text}`;
    },
  });