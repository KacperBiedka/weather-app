import * as React from "react";
import "./Loader.scss";

export interface LoaderProps {}

const Loader: React.SFC<LoaderProps> = () => {
  return (
    <div className="sk-folding-cube">
      <div className="sk-cube1 sk-cube" />
      <div className="sk-cube2 sk-cube" />
      <div className="sk-cube4 sk-cube" />
      <div className="sk-cube3 sk-cube" />
    </div>
  );
};

export default Loader;
