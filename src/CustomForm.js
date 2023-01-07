import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CustomForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        amount: 9,
        currency: "100000000",
        text: "my mom",
        terms: true,
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, "минимальная длина имени два символа")
          .required(),
        email: Yup.string().email().required(),
        amount: Yup.number().min(2, "Минимум два доллара"),
        currency: Yup.string().required("Выбирите пожалуйста валюту"),
        text: Yup.string().max(200, "Слишком длинный текст"),
      })}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className="form">
        <h2>Отправить пожертвование</h2>
        <label htmlFor="name">Ваше имя</label>
        <Field id="name" name="name" type="text" />
        <ErrorMessage className="error" name="name" component="div" />
        <label htmlFor="email">Ваша почта</label>
        <Field id="email" name="email" type="email" />
        <ErrorMessage className="error" name="email" component="div" />
        <label htmlFor="amount">Количество</label>
        <Field id="amount" name="amount" type="number" />
        <ErrorMessage className="error" name="amount" component="div" />
        <label htmlFor="currency">Валюта</label>
        <Field id="currency" name="currency" as="select">
          <option value="">Выберите валюту</option>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
          <option value="RUB">RUB</option>
        </Field>
        <ErrorMessage className="error" name="currency" component="div" />
        <label htmlFor="text">Ваше сообщение</label>
        <Field id="text" name="text" as="textarea" />
        <ErrorMessage className="error" name="text" component="div" />
        <label className="checkbox">
          <Field name="terms" type="checkbox" />
          <ErrorMessage className="error" name="terms" component="div" />
          Соглашаетесь с политикой конфиденциальности?
        </label>
        <button type="submit">Отправить</button>
      </Form>
    </Formik>
  );
};

export default CustomForm;
