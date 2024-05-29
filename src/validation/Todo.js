import * as Yup from 'yup';

export const TodoFormSchema = Yup.object().shape({
  todo: Yup.string().trim().min(4, 'O campo deve conter pelo menos 4 caracteres').required('O campo é obrigatório')
});