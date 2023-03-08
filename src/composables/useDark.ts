import { Dark } from 'quasar';

export const useDark = () => {
  const get = () => {
    if ('color-scheme' in localStorage) {
      Dark.set(JSON.parse(localStorage['color-scheme']));
    }
  };

  const set = (val: boolean) => {
    Dark.set(val);
    localStorage.setItem('color-scheme', JSON.stringify(val));
  };

  return { get, set };
};
