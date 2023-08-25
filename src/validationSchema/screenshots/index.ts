import * as yup from 'yup';

export const screenshotValidationSchema = yup.object().shape({
  url: yup.string().required(),
  upload_date: yup.date().required(),
  status: yup.string().required(),
  task_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
