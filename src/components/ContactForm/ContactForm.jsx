import { useState } from "react";
import s from "./Contact.module.css";
import { useId } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ addContacts }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    addContacts({ ...values });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <div>
          <label className={s.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field className={s.input} type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" as="span" />
        </div>

        <div>
          <label className={s.label} htmlFor={nameFieldId}>
            Number
          </label>
          <Field
            className={s.input}
            type="text"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage name="number" as="span" />
        </div>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
// const [formState, setFormState] = useState({ name: "", number: "" });

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const form = e.currentTarget;
//   addContacts({
//     name: form.elements.name.value,
//     number: form.elements.number.value,
//   });
//   e.target.reset();
// };

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   console.log(name, value);
//   setFormState((prev) => ({ ...prev, [name]: value }));
// };

//   return (
//     <div>
//       <form className={s.form} onSubmit={handleSubmit}>
//         <label className={s.label} htmlFor="">
//           Name
//           <input
//             className={s.input}
//             type="text"
//             name="name"
//             onChange={handleChange}
//           />
//         </label>
//         <label className={s.label} htmlFor="">
//           Number
//           <input
//             className={s.input}
//             type="text"
//             name="number"
//             onChange={handleChange}
//           />
//         </label>
//         <button className={s.btn}>Add contact</button>
//       </form>
//     </div>
//   );
// };
export default ContactForm;
