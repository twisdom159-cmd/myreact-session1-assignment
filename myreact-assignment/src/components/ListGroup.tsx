function ListGroup() {

  const topics = [
    {title:'What is React', id:0},
    {title:'Folder structure in React', id:1},
    {title:'JSX', id:2},
    {title:'Rendering lists', id:3},
    {title:'Conditional rendering', id:4},

  ];


  if (topics.length === 0) {
    return (
      <>
      <h1>List Group Component</h1>
      <p>No topics available. </p>
      </>
    );
  }

  return (
    <>
    <h1>List Group Component</h1>
    <ul className="topic-group">
      {topics.map((topics) => (<li key={topics.id}>{topics.title}</li>))}
    </ul>
    </>
  );
}


export default ListGroup;