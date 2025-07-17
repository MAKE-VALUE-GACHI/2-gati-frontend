import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { ICarouselItem } from "@interface/Board";
import { getCarouselItems } from "@api/APIInstance";

const BASE_IMAGE_URL = import.meta.env.VITE_BASE_URL.replace("/api/v1", "");

const Carousel = () => {
  const [data, setData] = useState<ICarouselItem[]>(dummyCarouselData);
  const [index, setIndex] = useState<number>(0);
  const total = data.length;

  const handleNext = () => setIndex((prev) => (prev + 1) % total);
  const handlePrev = () => setIndex((prev) => (prev - 1 + total) % total);

  const fetchData = async () => {
    try {
      const response = await getCarouselItems(); // getCarouselItems가 AxiosResponse를 반환
      const items = response.data as ICarouselItem[]; // 여기서 data만 추출

      setData(items);
      console.log(items);
    } catch (err) {
      console.error("Carousel 데이터를 불러오지 못했습니다.", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative w-full max-w-3xl h-96 mx-auto overflow-hidden shadow-lg">
      <AnimatePresence mode="wait">
        {data.length > 0 && (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full"
          >
            <img
              // src={data[index].imageUrl}
              src={BASE_IMAGE_URL + data[index].imageUrl}
              alt={data[index].title}
              className="w-full h-full object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end text-white bg-gradient-to-t from-black/80 to-transparent p-12 ">
              <p className="text-sm mb-1">{data[index].description}</p>
              <div className="flex items-center mb-1">
                <h2 className="text-3xl font-extrabold mr-2">
                  {data[index].title}
                </h2>
              </div>
              <span className="text-sm text-gray-200">
                made by. {data[index].nickname}
              </span>
              {/* <p className="text-sm">in {data[index].location}</p> */}
            </div>
          </motion.div>
        )}
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
        {data.map((_, i) => (
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

const dummyCarouselData: ICarouselItem[] = [
  {
    id: 1,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH2m0hJryg8ZVARKKHMCTLLKpm2xCZ5G93Hg&s",
    description: "정성껏 만든 김치전입니다. 나눔 감사합니다!",
    title: "수제 김치전",
    nickname: "맛집러버",
  },
  {
    id: 2,
    imageUrl:
      "https://blog.kakaocdn.net/dna/bl03A6/btqELSITKIH/AAAAAAAAAAAAAAAAAAAAAIZZ_K4twwnSt_bWunMYFV7voP9VlEAviRZ3TaRtoRxK/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=btdukU4OcjbR7NtNCEMKQLt5x1U%3D",
    description: "직접 구운 쿠키를 나눔합니다. 따뜻할 때 드세요 :)",
    title: "초코칩 쿠키",
    nickname: "베이킹하는여자",
  },
  {
    id: 3,
    imageUrl:
      "https://semie.cooking/image/board/cooking/qv/zy/chdomvpn/118548948ldcb.jpg",
    description: "남은 식빵으로 만든 프렌치토스트 나눔해요.",
    title: "프렌치 토스트",
    nickname: "한끼마스터",
  },
  {
    id: 4,
    imageUrl:
      "https://i.ytimg.com/vi/5EEinTWdkW4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCEH1aI01omr2_eee3xXTLwxjr3BQ",
    description: "먹다 남은 떡볶이인데 양이 많아서 나눔합니다!",
    title: "매콤달콤 떡볶이",
    nickname: "매운맛중독",
  },
  {
    id: 5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0FebyObhqsjTo7lxYfkK1Z2eloqK5jBF6iA&s",
    description: "직접 만든 수제 피클이에요. 햄버거나 샌드위치랑 잘 어울려요.",
    title: "수제 오이피클당근무",
    nickname: "저염장인",
  },
  {
    id: 6,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0FebyObhqsjTo7lxYfkK1Z2eloqK5jBF6iA&s",
    description: "제가 잎만 쓰고 싶은데, 흰 부분 상하기 전에 가져가세요!",
    title: "파 흰부분 필요하신 분",
    nickname: "우리집 요리사는 나야나",
  },
];
