import { IShared } from "@interface/User";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const tabs = [
  { label: "전체", value: "all" },
  { label: "게시글", value: "post" },
  { label: "후기", value: "review" },
];

const MyShareList = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  const filteredData =
    selectedTab === "all"
      ? dummySharedList
      : dummySharedList.filter((item) => item.type === selectedTab);

  return (
    <div className="p-6">
      {/* 탭 */}
      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setSelectedTab(tab.value)}
            className={`px-4 py-1 rounded-full border text-sm ${
              selectedTab === tab.value ? "bg-main text-white" : " text-gray"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 3x3 그리드 */}
      <div className="grid grid-cols-3 gap-3">
        {filteredData.map((item) => (
          <div key={item.id} className="relative aspect-square">
            <img
              src={item.imageURL}
              alt={`img-${item.id}`}
              className="object-cover w-full h-full rounded"
            />
            {/* 후기인 경우 별점 표시 */}
            {item.type === "review" && (
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 flex justify-center py-1">
                {[...Array(5)].map((_, idx) => (
                  <FaStar
                    key={idx}
                    className={`text-main ${
                      idx < item.score! ? "opacity-100" : "opacity-30"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyShareList;

const dummySharedList: IShared[] = [
  {
    id: 1,
    imageURL:
      "https://www.adobe.com/kr/creativecloud/photography/hub/features/media_19243bf806dc1c5a3532f3e32f4c14d44f81cae9f.jpeg?width=750&format=jpeg&optimize=medium",
    type: "post",
  },
  {
    id: 2,
    imageURL:
      "https://img.freepik.com/free-photo/cheesy-tokbokki-korean-traditional-food-black-board-background-lunch-dish_1150-42992.jpg?t=st=1733530111~exp=1733533711~hmac=a74f2349300833f6b4b622be6d131817ad5278c4f050a732e262fc14f5092a4e",
    type: "post",
  },
  {
    id: 4,
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0z47TKwDwkL3NkJiUWug_d-snxkQILQvo5ERCFp5e2S0Dci-M0Vk0IvOC3iwbBQ2h7FY&usqp=CAU",
    type: "post",
  },
  {
    id: 5,
    imageURL:
      "https://recipe1.ezmember.co.kr/cache/recipe/2024/01/11/f1e0660aa902ab16810f1c7236db7ecc1.jpg",
    type: "post",
  },
  {
    id: 6,
    imageURL:
      "https://m.mmjt.kr/web/product/big/202108/7cce8a73c60a92db5c257b50548981db.jpg",
    type: "review",
    score: 3,
  },
  {
    id: 7,
    imageURL:
      "https://static.wtable.co.kr/image/production/service/recipe/67/56362d9f-d8b4-4d66-8cab-99904f02ea36.jpg",
    type: "post",
  },
  {
    id: 8,
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0DCsAIJATKe2aInqg1RWuca2BzDoMnqGPdA&s",
    type: "review",
    score: 5,
  },
  {
    id: 9,
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCgWPkANWW1oVrU0S-_tA7s2DlDnh-wX1Vhg&s",
    type: "post",
  },
];
