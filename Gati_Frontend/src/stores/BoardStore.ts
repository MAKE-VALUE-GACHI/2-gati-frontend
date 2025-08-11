import { create } from "zustand";
import { persist } from "zustand/middleware";

export type BoardType = "SHARE" | "TRADE";

export interface CreateBoardState {
  title: string;
  category: string;
  content: string;
  price: number;
  type: BoardType;
  image: File | null;
  imagePreview: string | null; // 이미지 미리보기 URL 추가

  setField: <
    K extends keyof Omit<
      CreateBoardState,
      "setField" | "setImage" | "setPrice" | "reset" | "validateStep"
    >
  >(
    key: K,
    value: CreateBoardState[K]
  ) => void;
  setImage: (file: File | null) => void;
  setPrice: (amount: number) => void;
  clearImage: () => void;
  reset: () => void;

  // 단계별 유효성
  validateStep: (
    step: 1 | 2 | 3 | 4
  ) => { ok: true } | { ok: false; message: string };
}

const initialState = {
  title: "",
  category: "",
  content: "",
  price: 0,
  type: "SHARE" as BoardType,
  image: null as File | null,
  imagePreview: null as string | null,
};

// 이미지 파일 유효성 검사 함수
const validateImageFile = (
  file: File
): { valid: boolean; message?: string } => {
  const maxSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];

  if (file.size > maxSize) {
    return { valid: false, message: "파일 크기는 5MB를 초과할 수 없습니다." };
  }

  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      message: "JPG, PNG, WEBP, GIF 파일만 업로드 가능합니다.",
    };
  }

  return { valid: true };
};

export const useCreateBoardStore = create<CreateBoardState>()(
  persist(
    (set, get) => ({
      ...initialState,

      setField: (key, value) => set({ [key]: value } as any),
      setImage: (file) => {
        if (!file) {
          set({ image: null, imagePreview: null });
          return;
        }

        const validation = validateImageFile(file);
        if (!validation.valid) {
          alert(validation.message);
          return;
        }

        // 파일 URL 생성 (미리보기용)
        const imagePreview = URL.createObjectURL(file);
        set({ image: file, imagePreview });
      },

      clearImage: () => {
        const { imagePreview } = get();
        if (imagePreview) {
          URL.revokeObjectURL(imagePreview); // 메모리 정리
        }
        set({ image: null, imagePreview: null });
      },

      setPrice: (amount) => set({ price: Math.max(0, get().price + amount) }),

      reset: () => {
        const { imagePreview } = get();
        if (imagePreview) {
          URL.revokeObjectURL(imagePreview);
        }
        set(initialState);
      },

      validateStep: (step) => {
        const { title, category, content, image, type, price } = get();

        if (step === 1) {
          // 1단계: 이름, 카테고리
          if (!title.trim())
            return { ok: false, message: "음식 이름을 입력해주세요." };
          if (!category)
            return { ok: false, message: "음식 종류를 선택해주세요." };
          return { ok: true };
        }

        if (step === 2) {
          // 2단계: 설명
          if (!content.trim())
            return { ok: false, message: "설명을 입력해주세요." };
          return { ok: true };
        }

        if (step === 3) {
          // 3단계: 이미지
          if (!image)
            return { ok: false, message: "사진을 1장 이상 업로드해주세요." };
          return { ok: true };
        }

        // step === 4: 가격/나눔설정
        if (type === "TRADE" && (!price || price <= 0)) {
          return { ok: false, message: "거래 금액을 입력해주세요." };
        }
        return { ok: true };
      },
    }),
    {
      name: "create-board", // 세션 유지용 키
      partialize: (state) => ({
        // File은 직렬화 불가해서 제외 (새로고침 시 이미지만 초기화)
        title: state.title,
        category: state.category,
        content: state.content,
        price: state.price,
        type: state.type,
      }),
    }
  )
);
