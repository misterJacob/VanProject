import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error);
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={style}>
      <h1>{error.message}</h1>
      <h2>
        <pre>{error.message}</pre>
      </h2>
      <h3>
        <pre> {error.statusText}</pre>{" "}
      </h3>
    </div>
  );
}
