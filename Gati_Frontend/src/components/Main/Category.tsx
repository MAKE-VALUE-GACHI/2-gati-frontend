import { CategoryProps } from "@interface/Board";
import { useState } from "react";

const Category = ({ onSelect }: CategoryProps) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    { label: "한식", icon: "/assets/bibimbap.png" },
    { label: "양식", icon: "/assets/pasta.png" },
    { label: "분식", icon: "/assets/can.png" },
    { label: "디저트", icon: "/assets/dessert.png" },
    { label: "식재료", icon: "/assets/ingredient.png" },
    { label: "기타", icon: "/assets/etc.png" },
  ];

  const handleSelect = (label: string) => {
    setSelectedCategory(label);
    onSelect(label); // 외부로 선택된 값 전달
  };

  return (
    <div className="flex p-4 justify-evenly">
      {categories.map(({ label, icon }) => (
        <div
          key={label}
          onClick={() => handleSelect(label)}
          className="flex flex-1 flex-col items-center gap-2 cursor-pointer"
        >
          <img
            src={icon}
            className={`w-16 h-16 p-2 rounded-xl ${
              selectedCategory === label ? "bg-main" : "bg-white"
            }`}
          />
          <span className="text-sm">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Category;
