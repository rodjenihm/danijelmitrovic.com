import React from "react";

interface TagProps {
  name: string;
}

const Tag: React.FC<TagProps> = ({ name }) => {
  return (
    <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm hover:bg-primary/20 transition duration-200">
      {name}
    </span>
  );
};

export default Tag;
