import { atom } from 'recoil';

export const SearchValue = atom({
  key: 'searchState',
  default: '',
});

export const SearchPage = atom({
  key: 'searchPage',
  default: 0,
});
