import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  status: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  offer_id: yup.string().nullable().required(),
});
