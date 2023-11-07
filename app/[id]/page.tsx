import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const Detail = ({ params: { id } }: Props) => {
  return <div>id is {id}</div>;
};

export default Detail;
