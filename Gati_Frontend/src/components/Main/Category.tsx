const categories = [
  { name: "한식", img: "/assets/bibimbap.png" },
  { name: "양식", img: "/assets/pasta.png" },
  { name: "분식", img: "/assets/can.png" },
  { name: "디저트", img: "/assets/dessert.png" },
  { name: "식재료", img: "/assets/ingredient.png" },
  { name: "기타", img: "/assets/etc.png" },
];

const Category = ({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (cat: string) => void;
}) => {
  return (
    <div className="flex p-4 justify-evenly">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => onSelect(cat.name)}
        >
          <img
            src={cat.img}
            className={`w-16 h-16 rounded-xl p-2 ${
              selected === cat.name ? "bg-main" : "bg-white"
            }`}
          />
          <span className="text-sm">{cat.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Category;
