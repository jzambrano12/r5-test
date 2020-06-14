import { useQuery } from 'react-query';
import api from '../index';

export const useGetVolumes = (text, page) => {
  return useQuery(['PublicVolumes', text, page], api().getVolumes);
};
