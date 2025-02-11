import React from "react";

interface TagProps {
  name: string;
}

const Tag: React.FC<TagProps> = ({ name }) => {
  return (
    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm hover:bg-blue-200 transition duration-200">
      {name}
    </span>
  );
};

export default Tag;
