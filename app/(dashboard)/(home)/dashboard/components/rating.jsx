import React from "react";
import { Rating } from "@material-tailwind/react";

const Rated = () => {
  const [rated, setRated] = React.useState(4);

  return (
    <div className="flex items-center gap-2 font-bold text-blue-gray-500 ml-2 text-yellow-500">
      <Rating value={5} onChange={(value) => setRated(value)} />
    </div>
  );
};

export default Rated;
