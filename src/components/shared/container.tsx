import React from "react";

interface IContainer {
  children: any;
}

const Container = ({ children }: IContainer) => (
  <div
    style={{
      maxWidth: "980px",
      width: "100%",
      height: "calc(100vh - 120px)",
      margin: "50px auto 0",
      padding: "0 25px"
    }}
  >
    {children}
  </div>
);

export default Container;
