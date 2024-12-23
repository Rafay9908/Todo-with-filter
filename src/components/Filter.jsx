function Filter({ setFilter }) {
    return (
      <div className="flex flex-row flex-wrap justify-between my-4 text-[16px] text-white cursor-pointer">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("incomplete")}>Incomplete</button>
        <button onClick={() => setFilter("Work")}>Work</button>
        <button onClick={() => setFilter("Personal")}>Personal</button>
        <button onClick={() => setFilter("Shopping")}>Shopping</button>
      </div>
    );
  }
  
  export default Filter;
  