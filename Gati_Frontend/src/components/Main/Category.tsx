const Category = () => {
  return (
    <>
      <div className="flex p-4 justify-evenly">
        <div className="flex flex-1 flex-col items-center justify-between gap-2">
          <img
            src="/assets/bibimbap.png"
            className="w-16 h-16 p-2 bg-white rounded-xl"
          />
          <span className="text-sm">한식</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-between gap-2">
          <img
            src="/assets/pasta.png"
            className="w-16 h-16 p-2 bg-white rounded-xl"
          />
          <span className="text-sm">양식</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-between gap-2">
          <img
            src="/assets/can.png"
            className="w-16 h-16 p-2 bg-white rounded-xl"
          />
          <span className="text-sm">분식</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-between gap-2">
          <img
            src="/assets/dessert.png"
            className="w-16 h-16 p-2 bg-white rounded-xl"
          />
          <span className="text-sm">디저트</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-between gap-2">
          <img
            src="/assets/ingredient.png"
            className="w-16 h-16 p-2 bg-white rounded-xl"
          />
          <span className="text-sm">식재료</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-between gap-2">
          <img
            src="/assets/etc.png"
            className="w-16 h-16 p-2 bg-white rounded-xl"
          />
          <span className="text-sm">기타</span>
        </div>
      </div>
    </>
  );
};

export default Category;
