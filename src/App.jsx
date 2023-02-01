import { useState, useMemo } from "react";
import "./App.css";

import { useFetch } from "./useFetch";

function App() {
  const [url, setUrl] = useState(null);

  const { data } = useFetch({ url, onSuccess: () => console.log("success") });

  console.log("App rendering");

  return (
    <div className="App">
      <h1>Hello!</h1>
      <div>{JSON.stringify(data)}</div>
      <br />
      <div>
        <button onClick={() => setUrl("/jack.json")}>Jack</button>
        <button onClick={() => setUrl("/oscar.json")}>Oscar</button>
      </div>
    </div>
  );
}

export default App;
