import s from "./Contacts/ContactList..module.css";

const ContactList = ({ contacts }) => {
  return (
    <ul className={s.contacts}>
      {contacts.map((item) => (
        <li className={s.contact} key={item.name}>
          <div>
            <p>{item.name}</p>
            <p>{item.number}</p>
          </div>
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
