import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="spinner-body">
      <div class="spinner-box">
        <div class="circle-border">
          <di class="circle-core"></di>
        </div>
        <em>Loading ...</em>
      </div>
    </div>
  );
};

export default Loading;
