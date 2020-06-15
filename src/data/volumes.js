import superAgent from 'superagent';
const BASE_URL = 'https://www.googleapis.com/books/v1';

export default () => {
  return {
    getVolumes: async (_key, text, page) => {
      const parseText = text.toLowerCase().replace(/ /g, '+');
      try {
        const { body } = await superAgent.get(
          `${BASE_URL}/volumes?q=${parseText}&startIndex=${0 || page}`
        );
        return body;
      } catch (error) {
        return { error };
      }
    },
    getVolumeById: async (_key, id) => {
      try {
        const { body } = await superAgent.get(`${BASE_URL}/volumes/${id}`);
        return body;
      } catch (error) {
        return { error };
      }
    },
  };
};
