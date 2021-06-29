import React, { useContext } from "react";
import { data } from "./ComA";
import { sum } from "./ComA";

function ComE() {
  const channelName = useContext(data);
  const sumName = useContext(sum);
  return (
    <div>
      <h2>
        My passion is {channelName}
      </h2>
      <h2>
          my favourite number is {sumName}
      </h2>
    </div>
  );
}

export default ComE;
