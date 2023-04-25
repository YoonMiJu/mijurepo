import './App.css';

function AppJSX() {
  const name = '미주';
  const list = ['우유', '딸기우유', '바나나우유', '그릭요거트'];
  return (
    <>
      <h1 className='orange'>{`Hello ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {
          list.map((item) => (
          <li>{item}</li>))
        }
      </ul>
      <img
        style={{width: '200px', height: '200px'}}
        src="https://images.unsplash.com/photo-1681721422834-4db82c9c84e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
        alt="camping" />
    </>
  );
}

export default AppJSX;
