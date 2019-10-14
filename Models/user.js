import * as yup from "yup"; // for everything
const userYupSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(8)
    .max(60),
  name: yup.string().required(),
  avatar: yup
    .string()
    .url()
    .notRequired(),
  image: yup.string().notRequired(),
  created: yup.date()
});

export default userYupSchema;
