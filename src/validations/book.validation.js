import * as yup from 'yup';

export const bookValidation = yup.object({
  title: yup.string().required(),
  author: yup.string().required(),
  category: yup.string().required(),
});
