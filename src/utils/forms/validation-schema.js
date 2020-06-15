import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  name: yup.string().required('El nombre es requerido'),
  review: yup.string().required('La reseña es requerida'),
});
