import * as yup from 'yup';

export const todoSchema = yup.object({
  title: yup.string().required('Title is required'),
  completed: yup.boolean().required('Completed is required'),
});
