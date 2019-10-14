import * as yup from "yup"; // for everything
const userYupSchema = yup.object().shape({
  title: yup.string().required(),
  price: yup.number().required()
});

export default userYupSchema;
