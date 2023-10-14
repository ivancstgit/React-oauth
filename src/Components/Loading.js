import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

const Loading = () => (
  <div className="animate-spin">
        <MoonLoader className="mt-10 mx-auto" color="#000000" size={120} speedMultiplier={0.85}/>
  </div>
);

export default Loading;
