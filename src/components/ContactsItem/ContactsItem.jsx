export const Item = ({ name, number, onDeleteContact, id }) => {
  return (
    <p>
      <span>{name}:</span> <span> {number}</span>{' '}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </p>
  );
};