import axios from "axios";

import { ContentType } from "@interface/api";
import { ISearchFilter } from "@interface/Board";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": ContentType.Json,
  },
  //   withCredentials: true,
});

export const getCarouselItems = async () => {
  return await axiosInstance.get("/carousel");
};

export const getBoardList = async (params?: ISearchFilter) => {
  return await axiosInstance.get("/products", { params });
};
