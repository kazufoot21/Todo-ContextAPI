function App() {
  return (
    <div className="App">
      <h1>TO DO LIST</h1>

      <form autoComplete="off">
        <input
          type="text"
          name="todos"
          id="todos"
          required
          placeholder="what needs to be done?"
        ></input>
        <button type="submit">Create</button>
      </form>

      <ul>
        <li>
          <label htmlFor="">
            <input type="checkbox" id="" />
            Cooking To Do
          </label>
          <button>Edit</button>
        </li>
        <li>
          <label htmlFor="">
            <input type="checkbox" id="" />
            Cooking To Do
          </label>
          <button>Edit</button>
        </li>
      </ul>

      <div className="row">
        <label htmlFor="all" name="all" id="all">
          <input type="checkbox" />
          ALL
        </label>
        <p>you have 0 to do </p>
        <button id="delete">Delete</button>
      </div>
    </div>
  );
}

export default App;
