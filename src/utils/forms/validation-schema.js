import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[A-Za-z0-9@._-]+$/,
      'El nombre solo debe incluir letras y números. Sin espacios en blanco'
    )
    .required('El nombre es requerido'),
  review: yup.string().required('La reseña es requerida'),
});
