function ListGroup() {
 const item=["kaduna","Kano","Katsina","kebbi","Kogi","Kwara"]
    return (
    <>
    <h1>List </h1>
    <ul className="list-group">
        {item.map(item=> <li key={item}>{item}</li>)}
    </ul>
    </>
  );
}
export default ListGroup;
