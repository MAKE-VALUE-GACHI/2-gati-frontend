import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ICarouselItem } from "@interface/Board";

const Carousel = () => {
  const [index, setIndex] = useState<number>(0);
  const total = dummyData.length;

  const handleNext = () => setIndex((prev) => (prev + 1) % total);
  const handlePrev = () => setIndex((prev) => (prev - 1 + total) % total);

  return (
    <div className="relative w-full max-w-3xl h-96 mx-auto overflow-hidden shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full"
        >
          <img
            src={dummyData[index].imageURL}
            alt={dummyData[index].title}
            className="w-full h-full object-cover"
          />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end text-white bg-gradient-to-t from-black/80 to-transparent p-6 mb-8">
            <p className="text-sm mb-1">{dummyData[index].description}</p>
            <div className="flex items-center mb-1">
              <h2 className="text-3xl font-extrabold mr-2">
                {dummyData[index].title}
              </h2>
            </div>
            <span className="text-sm text-gray-200">
              made by. {dummyData[index].author}
            </span>
            {/* <p className="text-sm">in {dummyData[index].location}</p> */}
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full shadow"
      >
        <IoIosArrowBack size={24} className="text-white" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full shadow"
      >
        <IoIosArrowForward size={24} className="text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {dummyData.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white " : "bg-white bg-opacity-30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

// 더미데이터
const dummyData: ICarouselItem[] = [
  {
    id: 1,
    imageURL:
      "https://images.unsplash.com/photo-1635363638580-c2809d049eee?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JUVEJTk1JTlDJUVDJThCJTlEfGVufDB8fDB8fHww",
    description: "설날 떡국떡 아직도 못 해결해서 태랑 생산 했어요...",
    title: "육회비빔밥돌솥정식",
    author: "송정동맛주먹",
    location: "부산광역시 해운대구 송정동",
  },
  {
    id: 2,
    imageURL:
      "https://images.unsplash.com/photo-1635363638580-c2809d049eee?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JUVEJTk1JTlDJUVDJThCJTlEfGVufDB8fDB8fHww",
    description: "설날 떡국떡 아직도 못 해결해서 태랑 생산 했어요...",
    title: "마라로제크림파스타",
    author: "송정동맛주먹",
    location: "부산광역시 해운대구 송정동",
  },
  {
    id: 3,
    imageURL:
      "https://images.unsplash.com/photo-1635363638580-c2809d049eee?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JUVEJTk1JTlDJUVDJThCJTlEfGVufDB8fDB8fHww",
    description: "설날 떡국떡 아직도 못 해결해서 태랑 생산 했어요...",
    title: "내가 집에서 만든 쿠키",
    author: "송정동맛주먹",
    location: "부산광역시 해운대구 송정동",
  },
  {
    id: 4,
    imageURL:
      "https://images.unsplash.com/photo-1635363638580-c2809d049eee?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JUVEJTk1JTlDJUVDJThCJTlEfGVufDB8fDB8fHww",
    description: "설날 떡국떡 아직도 못 해결해서 태랑 생산 했어요...",
    title: "참치마요계란치즈김밥튀김롤",
    author: "송정동맛주먹",
    location: "부산광역시 해운대구 송정동",
  },
  {
    id: 5,
    imageURL:
      "https://images.unsplash.com/photo-1635363638580-c2809d049eee?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JUVEJTk1JTlDJUVDJThCJTlEfGVufDB8fDB8fHww",
    description: "설날 떡국떡 아직도 못 해결해서 태랑 생산 했어요...",
    title: "떡국떡 떡볶이",
    author: "송정동맛주먹",
    location: "부산광역시 해운대구 송정동",
  },
  {
    id: 6,
    imageURL:
      "https://images.unsplash.com/photo-1635363638580-c2809d049eee?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JUVEJTk1JTlDJUVDJThCJTlEfGVufDB8fDB8fHww",
    description: "설날 떡국떡 아직도 못 해결해서 태랑 생산 했어요...",
    title: "떡국떡 떡볶이",
    author: "송정동맛주먹",
    location: "부산광역시 해운대구 송정동",
  },
];
