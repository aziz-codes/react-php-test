import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("http://localhost/test.php").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="App">
      <h2>{data}</h2>
    </div>
  );
}

export default App;
