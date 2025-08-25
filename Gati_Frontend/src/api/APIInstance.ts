import axios from "axios";

import { ContentType } from "@interface/api";
import { ICreateBoard, ISearchFilter } from "@interface/Board";

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

export const createBoard = async (payload: FormData) => {
  return await axiosInstance.post("/products", payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getBoardDetail = async (id: string | number) => {
  return await axiosInstance.get(`/products/${id}`);
};
