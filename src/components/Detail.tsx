import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

const Detail = (props: RouteComponentProps) => {
  interface ISong {
    title: string;
  }
  const [song, setSong] = useState<ISong | {}>({});

  return <div style={{ background: "#66b6ee" }}></div>;
};

export default Detail;
