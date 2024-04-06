import s from "./Contact.module.css";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label} htmlFor="">
          Name
          <input className={s.input} type="name" />
        </label>
        <label className={s.label} htmlFor="">
          Number
          <input className={s.input} type="phoneNumber" />
        </label>
        <button className={s.btn}>Add contact</button>
      </form>
    </div>
  );
};
export default ContactForm;
