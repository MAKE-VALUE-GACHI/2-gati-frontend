const Category = () => {
  return (
    <>
      <div className="flex p-4 justify-evenly">
        <div className="flex flex-1 flex-col items-center justify-between gap-2">
          <img src="/assets/bibimbap.png" className="w-12 h-12" />
          <span>한식</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-between gap-2">
          <img src="/assets/pasta.png" className="w-12 h-12" />
          <span>양식</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-between gap-2">
          <img src="/assets/can.png" className="w-12 h-12" />
          <span>분식</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-between gap-2">
          <img src="/assets/dessert.png" className="w-12 h-12" />
          <span>디저트</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-between gap-2">
          <img src="/assets/ingredient.png" className="w-12 h-12" />
          <span>식재료</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-between gap-2">
          <img src="/assets/etc.png" className="w-12 h-12" />
          <span>기타</span>
        </div>
      </div>
    </>
  );
};

export default Category;
