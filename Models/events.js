import * as yup from "yup"; // for everything
const eventYupSchema = yup.object().shape({
  startDateTime: yup.date(),
  endDateTime: yup.date(),
  created: yup.date()
});

export default eventYupSchema;
