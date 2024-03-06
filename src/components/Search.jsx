import { useState } from "react";

const Search = ({ todos, setTodos }) => {
  const [searchKey, setSearchKey] = useState("");

  const searchTodo = () => {
    const filteredTodos = todos.filter((todo) =>
      todo.title.includes(searchKey.toLowerCase())
    );
    setTodos(filteredTodos);
    setSearchKey("");
  };

  return (
    <div>
      <h1 className=" text-5xl font-bold text-center my-4 uppercase">
        React Exercise
      </h1>
      <input
        type="text"
        className="border-2 border-black focus:none rounded p-1 w-3/4"
        onChange={(e) => setSearchKey(e.target.value)}
        value={searchKey}
      />
      <button
        className="bg-black text-white p-2 rounded ms-3 text-sm"
        onClick={searchTodo}
      >
        search
      </button>
    </div>
  );
};

export default Search;
