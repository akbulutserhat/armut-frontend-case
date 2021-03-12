const ListItem = ({ service }) => {
  const { name } = service;
  return (
    <div className='list-item'>
      <p>{name}</p>
    </div>
  );
};

export default ListItem;
