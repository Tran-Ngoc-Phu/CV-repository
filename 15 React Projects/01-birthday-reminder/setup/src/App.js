import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [listData, setListData] = useState(data);

  const onClearData = () => {
    setListData([]);
  };
  return (
    <main>
      <div className="container">
        <h3>{listData.length} birthdays today</h3>
        <List listData={listData} />
        <button onClick={onClearData}>Clear All</button>
      </div>
    </main>
  );
}

export default App;
