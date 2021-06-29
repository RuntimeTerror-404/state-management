import React, { createContext } from "react";
import ComB from "./ComB";
import ComD from "./ComD";
import ComE from "./ComE";

const data = createContext();
const sum = createContext();

function ComA() {
  return (
    <div>
      <h1>Hello World</h1>
      <ComB naam={"Mohit Parashar"} age={19} />
      <ComD z={8} x={3} y={5} />
      <data.Provider value={"Programming"}>
        <sum.Provider value={100}>
          <ComE />
        </sum.Provider>
      </data.Provider>
    </div>
  );
}

export default ComA;
export { data, sum };
