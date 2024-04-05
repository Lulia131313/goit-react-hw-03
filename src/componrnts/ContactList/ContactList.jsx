const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((item) => (
        <li key={item.name}>
          <p>{item.name}</p>
          <p>{item.number}</p>
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
