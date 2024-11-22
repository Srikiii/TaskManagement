import React from "react";
import Cards from "../components/Home/Cards";

const Completedtasks = () => {
 
  return (
    <div>
      <div>
    <h3 className="ml-12 text-5xl mb-16">Completed Tasks</h3>

    </div>

      <Cards Home={"false"} showCompletedOnly={true} />
    </div>
  );
};

export default Completedtasks;
