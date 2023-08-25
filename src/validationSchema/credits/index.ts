import * as yup from 'yup';

export const creditValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  credit_date: yup.date().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  task_id: yup.string().nullable().required(),
});
