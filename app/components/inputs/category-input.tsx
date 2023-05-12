"use client";

import { IconType } from "react-icons/lib";

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`flex flex-col p-4 gap-3 border-2 rounded-xl
       hover:border-black transition cursor-pointer
       ${selected ? "border-black" : "border-neutral-200"}

       `}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryInput;
