export const Filter = ({ filter, onFilter }) => {
    return (
      <>
        <p>Find contacts by name</p>
        <input type="text" name="filter" value={filter} onChange={onFilter} />
      </>
    );
}