import React from "react";
import Cards from "../components/Home/Cards";

const Incompletedtasks = () => {
  return (
    <div>
    <div>
    <h3 className="ml-12 text-5xl mb-16">InCompleted Tasks</h3>

    </div>

      <Cards Home={"false"} showIncompleteOnly={true} />
    </div>
    );
};

export default Incompletedtasks;
